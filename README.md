# xQWERTYa Switching
xQWERTYa Swithing is an Elgato Stream Deck plugin intended to facilitate switching profiles using an Elgato Stream Deck. 

## How to Use xQWERTYa Switching
1. Link the project.
    - run `streamdeck link "com.xlevia.xqwertya-switching.sdPlugin"` in the root of this project.
2. Watch the project.
    - run `npm run watch` in the root of this project. 
3. Create a button on your Elgato Stream Deck.
    1. Navigate to where you want the button to be.
    2. Find ⸉xL⸉ ꭉ ⸉xQWERTYa Switching⸉ in the sidebar and create a switcher.
    3. Select a VK option in the switcher's settings. Take note of which VK you use. 
4. In your existing xQWERTYa configuration create a VK of the keybind with ⌄ contents. This binds a virtual key (0E) to switching to the `default` profile.
    - ```json
        {
            "target": "VK0E",
            "unsafe": true,
            "strict": true,
            "default": ">default"
        }
        ```
    - To change the virtual key change the contents of the target following `VK`. You should match whatever you selected in the Stream Deck software. 
    - To change what profile is bound just change the profile switch action [as according to xQWERTYa's documentation](https://github.com/xLeviadeer/xQWERTYa/blob/main/Docs/Keybinds.md#profile-switch).
5. Reload xQWERTYa with the new keybind. 
    - pressing the button on your Stream Deck sends the selected VK and then xQWERTYa observes that presss and resultingly performs an action. Which╌in this case╌is a profile switch.

## Troubleshooting
- Ensure you have linked and watched the project before attempting to use it in the Stream Deck software.
    - It's required to re-link and re-watch the project on each PC it is used on. 
    - The Stream Deck software sometimes needs to be restarted for changes to go into effect. Close it with Task Manager and then re-open it to do this. 
- Ensure that `*.sdPlugin/bin/SendVK.exe` exists.
    - The plugin expects to be able to run `SendVK.exe` to communicate with xQWERTYa and as such: it must exist. If it does not exist for you then you can find it [in the xQWERTYa repo](https://github.com/xLeviadeer/xQWERTYa/blob/main/VK%20Connections/SendVK.ahk). 