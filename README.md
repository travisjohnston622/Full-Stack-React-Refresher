# Color Blocks Exercise

We will be building up an application that creates Color Blocks on the DOM based off of buttons that are loaded right away. Additionally, we are going to be tracking the number of Blocks in each color we create. When the user clicks on a color button, it will create a Color Block, then add to that colors count.

## Installation and Setup

1. create a Postgres database called `color_blocks_dashboard`
1. Use the following queries to setup your tables needed for the exercise

    ```sql
   -- store the different color options
    CREATE TABLE "colors" (
        id SERIAL PRIMARY KEY,
        label VARCHAR(80) NOT NULL,
        hex_code VARCHAR(6)
    );

    -- store the color blocks that have been created
    CREATE TABLE "blocks" (
        id SERIAL PRIMARY KEY,
        color_id INT REFERENCES "colors"
    );

    -- pre-load some colors
    INSERT INTO "colors" ("label", "hex_code")
    VALUES ('Red', 'ff0000'),
        ('Yellow', 'ffff00'),
        ('Blue', '0000ff'),
        ('Green', '00ff00');
        
    -- pre-load some blocks for initial render
    INSERT INTO "blocks" ("color_id")
    VALUES (4),
        (3),
        (2),
        (1);
    ```

1. from the root of the project directory
    1. run: `npm install`
    1. run: `npm run server`
        - starts the node back-end server and restarts the server every time a change is saved
    1. run: `npm run client`
        - starts the client-side server with live refresh


## Base Mode

At the end of the Base Mode requirements you should have 2 pages with the ability to add Color Swatches (a.k.a. color blocks) to the page as well as deleting them and altering their color. There will be an additional page where a user can add, remove, or update the available color options for the color swatches. These various features will be separated into different parts so that you can execute each **Part** and the application should be testable after the completion of each part.

Leverage `redux` and `redux-saga` for this exercise.


### Part 1: Pages

- [ ] create two pages "**Swatches**" and "**Colors**"
    - **Swatches** should be the home URL route, `#/`
    - **Colors** page should be at a colors URL route, `#/colors`
- [ ] Create navigation in the `Header.js` component
    - navigation should have two links one for **Swatches** and another for **Colors**
- [ ] on the **Swatches** page show a heading that says, "Color Swatches"
- [ ] on the **Colors** page show a heading that says, "Color Settings"
- [ ] on each page display some text below the headings to be a placeholder of the page content
- [ ] setup `redux` and `redux-saga`


### Part 2: Swatches

- [ ] there is an empty `get` router in `blocks.router.js`, make sure to set it up to pull data from the `blocks` table and the `colors` table in order to have all relevant data
- [ ] on initial page load **GET** all of the blocks data from the server to display the color blocks on the page
- [ ] use a 4 column grid to display all of the swatches on the page
- [ ] each individual swatch should display the color in a square / rectangle and below the color the name / label of the color displayed next to a **Delete** button
- [ ] when the **Delete** button on an individual swatch is clicked it will remove that swatch from the database and from the list of rendered swatches


### Part 3: Swatches, Add Colors

- [ ] **GET** the colors data from the server in order to render all of the **Add Color** buttons
    - a route for getting the colors data already exists in the `colors.router.js` router on the server 
    - the buttons should be added just above where the list of swatches/blocks are displayed
- [ ] when any of the **Add Colors** buttons are clicked a new swatch should be saved to the database `blocks` table
    - after a new block has been added to the database the swatches on the page should be reloaded


### Part 4: Colors

- [ ] on initial page load use the **GET** route supplied in `colors.router.js` to load all of the available colors
- [ ] the available colors should be listed stacked one on top of the other
- [ ] an available color item should display a square with the color, the hex code for the color, the label/name of the color, and a **Delete** button
- [ ] when the **Delete** button is clicked the individual color item should be removed from the database in the `colors` table
    - if the user has a swatch in their list with the color they are trying to delete then surface a message to the user asking them to remove the swatches with the same color first


### Part 5: Colors, Adding a New Color

- [ ] create a form just above your list of colors with 2 fields
    - field: Name (for `label` data)
    - field: Color Hexcode (for `hex_code` data)
- [ ] the form should have an **Add Color** button that when clicked will save the user's entered data to the database on the `colors` table
- [ ] after a new color is added to the database successfully refresh the list of colors


### Part 6: Colors, Updating a Color

- [ ] when clicking on a color item change the color item layout from displaying the color item data to displaying a form
- [ ] the update form should have a field for the **Name** (`label`) and one for the **Haxcode** (`hex_code`) and a **Save** button
- [ ] the fields should be pre-populated with the current data for that color item
- [ ] after clicking save for the updated information **PUT** that new data to the server
    - when a successful response is received reload the colors list

