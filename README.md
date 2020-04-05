# vue-scan-com

This package is used to find out the given component is used under which other components as child component.

## How to use

1. Install package by using<br/>
    `npm i vue-scan-com`
2. Add following line at `scripts` of `package.json`

    ```json
    {
        "vueScanCom" : "node node_modules/vue-scan-com"
    }
    ```

3. Run `npm vueScanCom component_name`

## Config file

Create `vue-scan-com.config.json` in root of project<br/>
Following are available options

```json
{
    "patternToMatchFileNames": "**/**.vue"
}
```
