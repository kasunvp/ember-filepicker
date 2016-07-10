# Ember Filepicker
(This is a WIP and the documentation is not complete)

This addon provides a shim to the file upload service library filepicker.io

## Steps to Use

1. Install the addon

```
ember install ember-filepicker
```

2. Add the API key config/environment.js file

```
filepicker: {
  key: '<filepicker.io API key>'
}
```

3. Add the filepicker component to your template

```
{{ember-filepicker onSelection=(action 'fileSelected')}}
```

4. Handle the returned list of uploaded files in the '`fileSelected`' action

```
actions: {
  fileSelected(file) {
    // 'file' will contain a list of files if multiple mode is enabled
  }
}
```