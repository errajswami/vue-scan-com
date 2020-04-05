# vue-scan-com

## How to use

1. Install package by using<br/>
    `npm i errajswami/vue-scan-com.git` (not released at npm yet)
2. Add following line at `scripts` of `package.json`

    ```json
    {
        "vueScanCom" : "node node_modules/vue-scan-com"
    }
    ```

3. Run `npm vueScanCom component_name`

## Config file

Create `vue-scan-com.config.json` in root of project
Following are available options

```json
{
    "patternToMatchFileNames": "**/**.vue"
}
```
