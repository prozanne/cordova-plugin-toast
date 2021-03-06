# toast.application
toast.application privides APIs related with the application.

## Supported platforms
* browser
* sectv-orsay
* sectv-tizen

## Full WebIDL
```WebIDL
module Application {
    [NoInterfaceObject] interface ApplicationManagerObject {
        readonly attribute ApplicationManager application;
    };
    Toast implements ApplicationManagerObject;

    [NoInterfaceObject] interface ApplicationManager {
        void exit();
    };
};
```

## APIs
### void exit();
This function terminates current application.
* Parameters

	N/A

* Return value

	N/A

* Exceptions
	* throws TypeError
		* If given arguments are not matched with API specification.
	* throws Error
		* if any error occured during the operation.
* Examples
	1. Terminate current application when Return key pressed.

		```js
		window.addEventListener('keydown', function (e) {
			if(e.keyCode === tvKeyCode.Return) {
				toast.application.exit();
			}
		});
		```

## See others
[toast.inputdevice](toast.inputdevice.md)
