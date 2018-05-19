#!/usr/bin/env node

const fs = require("fs")

const validGitmoji = [
  "art",
  "zap",
  "fire",
  "bug",
  "ambulance",
  "sparkles",
  "memo",
  "rocket",
  "lipstick",
  "tada",
  "white_check_mark",
  "lock",
  "apple",
  "penguin",
  "checkered_flag",
  "robot",
  "green_apple",
  "bookmark",
  "rotating_light",
  "construction",
  "green_heart",
  "arrow_down",
  "arrow_up",
  "pushpin",
  "construction_worker",
  "chart_with_upwards_trend",
  "recycle",
  "heavy_minus_sign",
  "whale",
  "heavy_plus_sign",
  "wrench",
  "globe_with_meridians",
  "pencil2",
  "hankey",
  "rewind",
  "twisted_rightwards_arrows",
  "package",
  "alien",
  "truck",
  "page_facing_up",
  "boom",
  "bento",
  "ok_hand",
  "wheelchair",
  "bulb",
  "beers",
  "speech_balloon",
  "card_file_box",
  "loud_sound",
  "mute",
  "busts_in_silhouette",
  "children_crossing",
  "building_construction",
  "iphone",
  "clown_face",
  "egg",
  "see_no_evil",
  "camera_flash",
]
  // Replace all underscores with escaped underscores
  .map(gitmoji => gitmoji.replace("_", "\\_"))
  // Add `:` to the ends of each Gitmoji to make them actual emoji's, also escaped
  .map(gitmoji => `\\:${gitmoji}\\:`)
  // Convert to a valid Regex group by joining with a pipe `|`
  .join("|")

const requirements = [
  [
    new RegExp(`^(${validGitmoji})+\\s.{0,49}\n`),
    "Title must be less than 50 characters. Not including Gitmoji",
  ],
  [
    new RegExp(`^(${validGitmoji})+`),
    "Title needs at least one valid Gitmoji: https://gitmoji.carloscuesta.me",
  ],
  [/^(\:([0-9]|[a-z]|[_])+\:)+\s/, "Title needs a space after all Gitmoji"],
  [/^(\:([0-9]|[a-z]|[_])+\:)+\s[A-Z]/, "Title must begin with a capital letter."],
  [/^.*[^\.]\n/, "Title must not have a period at the end."],
]

const formatProblem = (message, rule) => (message.match(rule[0]) ? null : rule[1])

const formatProblems = (message, rules) =>
  rules.map(requirement => formatProblem(message, requirement)).filter(error => Boolean(error))

const validateCommitMessage = (message, rules) =>
  formatProblems(message, rules)
    /* eslint-disable-next-line no-console */
    .map(mes => console.error(mes))
    .map(() => process.exit(1))

const getCommitFile = () => {
  const commitMessage = process.argv[2]
  if (commitMessage) return commitMessage
  /* eslint-disable-next-line no-console */
  console.error("Commit message file doesn't exist.")
  process.exit(1)
}

fs.readFile(getCommitFile(), "utf8", (fileError, message) => {
  if (fileError) {
    /* eslint-disable-next-line no-console */
    console.error(fileError)
    return process.exit(1)
  }
  validateCommitMessage(message, requirements)
})
