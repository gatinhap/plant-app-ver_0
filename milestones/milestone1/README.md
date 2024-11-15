# Milestone #1 - dashboard

Only inspiration:
![image](./flowers.png)

First bigger milestone will be create dashboard with all flowers in our system.

## TODO LIST

1. Update project dependencies
1. Review and adjust code to work with rules from https://github.com/gatinhap/plant-app-ver_0/pull/26
1. Integrate `Zod` to the project, base on type from file `FlowerSchema.ts` and `FlowerSchemaMockData.ts` to serve that data using `MSW` to able to use it by `react-query`
1. Create dashboard with data from `react-query` using some popular library like `AG-Grid` or `Material UI` or other(something what support `styled-components`)
   - show 8 - 10 columns
   - may support column sorting
   - support pagination or infinite scrolling
   - select how much entries show on one page/scroll
   - create basic unit tests
   - if You want please make it responsive
1. Create on top of dashboard filters using `react-hook-form`, library components(may be library from previous task) and integrate it with `Zod`. Everything should be handled on backend side(by calling `react-query` and handled by `MSW`)
   - around 6 - 8 filters different type (text, number, range, select)
   - clear filters option
   - create basic unit tests
   - if You want please make it responsive

Links:

- https://zod.dev/
- https://mui.com/material-ui/react-table/
