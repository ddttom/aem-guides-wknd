# 3dcube Component

## Overview

The **3dcube** component is a 6-sided interactive 3D cube where each face contains an image linked to a specified URL. Users can rotate the cube in all directions using their mouse. Hovering over an image enables rotation without clicking, and double-clicking an image navigates to the linked page. On page load, the first image is positioned correctly.

## Features

- **Interactive 3D Rotation:** Users can rotate the cube freely in all directions.
- **Image Links:** Each face of the cube contains an image that acts as a hyperlink.
- **Hover Rotation:** Mouse movement over an image rotates the cube without the need to click.
- **Double-Click Navigation:** Double-clicking an image redirects the user to the linked URL.
- **Initial Positioning:** On page load, the first image is positioned correctly on the cube.

## Implementation Details

### File Structure

```bash
ui.apps/src/main/content/jcr_root/apps/your-project/components/3dcube/
├── 3dcube.html
├── cq_dialog/
│   └── .content.xml
├── cq_editConfig.xml
├── clientlibs/
│   ├── css.txt
│   ├── js.txt
│   ├── 3dcube.scss
│   └── 3dcube.js
└── README.md

/core/src/main/java/com/yourcompany/yourproject/core/models/
└── CubeModel.java
```

## Usage Instructions

1. **Add the Component to a Page:**
   - Navigate to the desired page in AEM.
   - Open the page in Edit mode.
   - Drag and drop the **3dcube** component from the components browser to the desired location on the page.

2. **Configure the Cube Faces:**
   - Click on the **3dcube** component to open its dialog.
   - Use the **Add** button to add six faces.
   - For each face:
     - **Image:** Upload or select an image.
     - **Link:** Choose the target page or enter a URL.
   - Ensure that exactly six faces are configured for proper cube rendering.

3. **Preview the Cube:**
   - After configuring, save the dialog.
   - Exit Edit mode to preview the interactive 3D cube on the page.

## Styling and Customization

- **SCSS Variables:** Customize the cube size by modifying the .cube-container dimensions in 3dcube.scss.
- **Animation Speed:** Adjust the transition property in the .cube class to change rotation speed.
- **Image Styling:** Modify the img styles within .face to change how images appear on each face.
- **Responsive Design:** Ensure the cube scales appropriately on different devices by adding media queries in 3dcube.scss.

## Accessibility

- **Alt Text:** Ensure each image has meaningful alternative text for screen readers.
- **Keyboard Navigation:** Enhance the component to support keyboard interactions for rotation and navigation.
- **Focus Indicators:** Implement visible focus states for interactive elements to aid users navigating via keyboard.

## Performance Optimization

- **Lazy Loading:** Implement lazy loading for images to improve initial load times.
- **Asset Optimization:** Compress images to reduce file sizes without compromising quality.
- **Minimize JavaScript:** Ensure the JavaScript responsible for interactions is optimized and does not block rendering.

## Troubleshooting

- **Cube Not Rotating:**
  - Ensure that all six faces are configured with images and links.
  - Check for JavaScript errors in the browser console.
- **Images Not Displaying:**
  - Verify that the image paths are correct and the images are uploaded successfully.
  - Ensure that the img tags have appropriate src attributes.
- **Links Not Navigating:**
  - Confirm that the href attributes are correctly set in the dialog.
  - Ensure that the double-click event handler is functioning as expected.

## Further Enhancements

- **Touch Support:** Add touch event listeners to enable rotation on mobile devices.
- **Dynamic Content:** Integrate with AEM's Content Fragments for dynamic image and link content.
- **Customization Options:** Provide additional configuration options in the dialog for advanced customizations like rotation speed, cube size, and more.

For any issues or feature requests, please refer to the project repository or contact the development team.

## Additional Notes

- **Client Libraries Configuration:** Ensure that your clientlibs are correctly referenced in the HTL file. The clientlibs.css and clientlibs.js should include 3dcube.scss and 3dcube.js respectively.
- **Image and Link Configuration:** In the component dialog, the Multifield allows authors to add six faces with corresponding images and links. Make sure to validate that exactly six entries are added for proper cube rendering.
- **Responsiveness:** Adjust the .cube-container and .cube dimensions in 3dcube.scss to fit different screen sizes as needed.
- **Accessibility Enhancements:** Consider adding ARIA attributes and keyboard event listeners to improve accessibility for users relying on assistive technologies.
- **Performance Optimization:** Optimize images for the web and consider lazy loading if the cube is resource-intensive.

If you encounter any issues or require further customization, please refer to the AEMaaCS Development Guide for best practices and additional guidance.
