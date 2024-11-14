# React router tutorial


## The project structure

 - main.jsx: Entry point of app and define route
 - index.css: (Not important) Css for whole web
 - errorPage.jsx: Error page
 - contacts.js: Interact with data
 - routes( folder): Hold component
	 - routes/root: Main layout. There is an **outlet** in root. 
	 - routes/edit: Edit component
	 - routes/contact: Contatct component
	 - routes/destroy: Just make API call. 

## Importances!
 - Nested routes in main + Outlet in root -> Nested layout.
 - Root path contains:
	 - element: Root layout
	 - errorElement: What to show when there is error
	 - loader: A "convenience" when using react router this way( similar to context), Helps to load data
	 - action: Capture submit action( There is form in root)
	 - children: Nested path. Each path's element is a component => When "go" to the URL. We have Root Layout + Component. 
	 - Just click on the New button and see. 


