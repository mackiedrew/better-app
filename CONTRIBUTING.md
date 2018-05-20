# Contributing

## Commit Messages

Commits should be as small as possible, atomic commits are highly recommended.
Commits do not need to be feature-complete but should all be operational.
If work-in-progress (WIP) commits are created they should be squashed or
renamed with an interactive rebase.

### Title

0. Title must be less than 50 characters. Not including Gitmoji.
0. Title needs at least one valid [Gitmoji](https://gitmoji.carloscuesta.me).
0. Title needs a space after all Gitmoji.
0. Title must begin with a capital letter.
0. Title must not have a period at the end.

### Message

Should include relevant details, and give all required context.
Ideally if referencing an issue, should include an issue number as well.

## Branches

The main branches are as follows:

- *development*: This is the main branch, normally called `master`.
- *production*: This branch reflects what is currently in production at
  any one time. It will be hard reset against the release each time.

### Working Branches

Branches should be taken out of `development`, prior to each pull
request they should be *rebased* and *not `merged`*.

- `f/a-very-good-name`: Should be used for a feature.
- `b/a-very-good-name`: Should be used for a bug.
- `c/a-very-good-name`: Should be used for a chore.
- `t/a-very-good-name`: Should be used for adding tests.
- `w/a-very-good-name`: Should be used for a work-in-progress branch.

Other tips:

0. No name more than 30 characters.
0. Do not use `_` as a space, use `-` instead.
0. Do not include merge commits, always rebase instead.
