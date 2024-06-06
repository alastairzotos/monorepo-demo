to talk about monorepos we first have to talk about static types

why do we need types?
  types are like unit tests that come for free and notify us of problems immediately
  we want to prevent a whole class of regressions before they're caught
  as mentioned by mateu/kostas, changes can have unintended changes elsewhere

why do we want monorepos?
  applications are rarely a single codebase these days
  APIs over a network are typically dynamically typed
  there are tools like contract tests but these are hard to set up
  we want to establish type safety at every layer of the app
  changes in the frontend might not be reflected in the backend, or changes in a db schema might not be
    reflected in a form to create rows for that db table

benefits of monorepos?
  shared code can allow us to have a single source of truth
  shared schemas and types can be used to validate forms, API requests/responses, database schemas, etc
  shared logic can be used in various places without duplication, i.e. calculating prices

downsides on monorepos?
  longer build times, but these can be addressed with caching
  typically stuck to one programming language
