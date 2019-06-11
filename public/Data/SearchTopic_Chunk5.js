define({"448":{i:0.000291775842449697,u:"../search_design/full-text-search.htm",a:"Full-text search is a feature where a user enters arbitrary text into a search field and then gets documents that are relevant for that query. It is normally combined with faceted navigation. In the example below, a user searched for “hammer” and then further filtered for hammer weights of 2000 gram ...",t:"Full-Text Search"},"449":{i:0.000291775842449697,u:"../search_design/generic-faceted-search.htm",a:"Faceted search (sometimes also called faceted navigation) allows users to navigate through a web site by applying filters for categories, attributes, price ranges and so on. It’s probably the most basic feature of a search and users expect this to work. Unfortunately, we observed that this is also ...",t:"Generic Faceted Search"},"450":{i:0.000291775842449697,u:"../search_design/multi-term-auto-completion.htm",a:"Term completion is a feature where a user gets suggestions for search terms and matching search results as he types the query. We call a completion multi-term when it is able to combine terms from different attributes in an open-ended fashion. In the below example, a user entered “fortis” (a brand) ...",t:"Multi-Term Auto Completion"},"451":{i:0.000291775842449697,u:"../search_design/naive-product-centric-approach.htm",a:"A Naive Product Centric Approach Finding products on e-commerce website can be tricky, even when you know exactly what you are looking for. Throughout this document, we will assume a customer wants to buy a hammer that weighs 2kg. A product that would meet his needs might be this “Fäustel” by ...",t:"A Naive Product-Centric Approach"},"452":{i:0.000291775842449697,u:"../search_design/other-best-practices.htm",a:"Finally, we want to provide you with a list of some additional and potentially useful principles regarding the setup of an on-site search experience.\n \nIndex Pages, Not Products\n\n Each document we put in Elasticsearch corresponds to an URL  The mapping type in our schema is called page, not product ...",t:"Other Best Practices"},"453":{i:0.000291775842449697,u:"../search_design/personalization-dymanic-pricing.htm",a:"Especially in businesses with a B2B focus, customers expect to get discounts after they have been using the service/website for a longer period of time. The search infrastructure should be able to handle such use cases and customers should be able to see their own discounted prices while browsing ...",t:"Personalization: Dynamic Pricing"},"454":{i:0.000291775842449697,u:"../search_design/simple-spelling-suggestions.htm",a:"Spelling suggestions provide the users with alternative search terms when the search query does not return any results:\n Translation: Unfortunately there were 0 results for your exact search term “hammer holk”. Did you possibly mean hammer holz? This is one of the simplest features you can build ...",t:"Simple Spelling Suggestions"},"455":{i:0.000291775842449697,u:"../search_design/usage-driven-schema-structure.htm",a:"Both the schema and the query generator should not need to know that there is such a thing as as the weight of a hammer. We will argue for a document structure and schema design that is not built around the original data but around the usage of attributes in search operations.\n\n At Contorion, this ...",t:"Usage-Driven Schema \u0026 Document Structure"},"456":{i:0.000291775842449697,u:"../state_machine_cookbook/state-machine-cookbook.htm",a:"State machines are a model of computation used to automate processes. In Spryker you can use the OMS module to automate the management of orders or the StateMachine module to automate other processes you define in your shop. Both behave similar, but the OMS one is a customized solution to manage the ...",t:"State Machine Cookbook - Part I - State Machine Fundamentals"},"457":{i:0.000291775842449697,u:"../state_machine_cookbook/state-machine-cookbook-2.htm",a:"\nThis chapter will help you model a state machine using Spryker to manage your sale orders.\n First of all, it’s important to know which tasks must be executed after an order is submitted and in which order. Keep in mind that you can define more than one state machine in your system to cover the use ...",t:"State Machine Cookbook - Part 2 -Building a State Machine"},"458":{i:0.000291775842449697,u:"../resources_and_developer_tools/about-resources.htm",a:"About Resources and Developer Tools This section contains general information and resources for developers. The topics covered in resources are general topics that do not pertain to a specific component or capability.",t:"About Resources and Developer Tools"},"459":{i:0.00252518681129287,u:"../resources_and_developer_tools/session_management/session-management-201903.htm",a:"User, Customer and Customer Page modules support the session behaviour in Spryker. In Zed, it is managed by a javascript while in Yves it is managed by a widget. Configuration for both of them is located in the same confi file, depending on the environment. They both use the same formula for session timeout calculation. The use case scenarios which can be assumed using the formula are included.",t:"Session Management | Spryker"},"460":{i:0.00136497086430447,u:"../resources_and_developer_tools/session_management/session-handlers.htm",a:"We provide a number of session handlers to work with different storages. By default, the demo-shop uses a locking Redis session handler for Yves and a non-locking Redis session handler for Zed in the development environment.\n\n The following session handlers are currently available:\n\n File\n ...",t:"Session Handlers"},"461":{i:0.000342755685935199,u:"../resources_and_developer_tools/configuration-management.htm",a:"Default and Local Configuration Files\n Under config/Shared you’ll find several files that are used for the system’s configuration, that can be used by both Yves and Zed.\n The files are merged in a fixed order if they exist. So the entries of config_default.php are overwritten by the entries in ...",t:"Configuration Management"},"462":{i:0.00116558772730194,u:"../resources_and_developer_tools/console-commands.htm",a:"We provide an integrated mechanism to add command line calls. Technically this is based on Symfony’s Console Component.\n\t\t \n\t\t\tGet a list of all available commands\n\t\t You can see the list of all of the commands by running: vendor/bin/console. vagrant@spryker-vagrant ➜  current git:(develop) ✗ ...",t:"Console Commands"},"463":{i:0.000291775842449697,u:"../resources_and_developer_tools/container-globals.htm",a:"The ContainerGlobals is a way to inject dependencies which are available inside your  Factories . Every dependency added to the ContainerGlobals is available by using getProvidedDependency() in your factory.\n \nTo add something globally you need to create a service provider and add it to the ...",t:"Container Globals"},"464":{i:0.000291775842449697,u:"../resources_and_developer_tools/core-extension.htm",a:"We offer several ways like plugins to hook into the core’s behavior and extend this without modifications. But sometimes this is not enough, so you need to replace a method which is deep in the core.\n\n Before your proceed, double check if there is no other way to solve your requirement, maybe there ...",t:"Core Extension"},"465":{i:0.00062528036776422,u:"../resources_and_developer_tools/cronjob-scheduling.htm",a:"We use  Jenkins  for cronjob scheduling. Compared to Crontab, there are several benefits: Jobs are queued and can be manually executed Job definitions are under version control and can be changed by any developer Console output available for debugging Add a new job and run it Jobs are defined in ...",t:"Cronjob Scheduling"},"466":{i:0.000291775842449697,u:"../resources_and_developer_tools/data-importers-review-implementation.htm",a:"The article will walk you through use cases and the process of implementing the data importers in your project.",t:"Data Importers | Spryker"},"467":{i:0.000291775842449697,u:"../resources_and_developer_tools/dataimporter-speed-optimization.htm",a:"Importing big amount of data into a system can pose a real problem. When not optimized, the importing process will most likely be slow.",t:"Dataimporter Speed Optimization | Spryker"},"468":{i:0.000458528105106958,u:"../resources_and_developer_tools/dependency-provider.htm",a:"Each (Undefined variable: General.bundles/modules) ships with a DependencyProvider class which explicitly defines services and external dependencies to other (Undefined variable: General.bundles/modules). For instance when the Cms module requires the Glossary module this needs to be configured here. ...",t:"Dependency Provider"},"469":{i:0.00160297199116871,u:"../resources_and_developer_tools/factory.htm",a:"All (Undefined variable: General.bundles/modules) are shipped with a dedicated factory for each layer. The responsibility of the factory is to create new instances of the classes from the same layer and module.\n\n The following example shows a typical method from a factory. The method ...",t:"Factory"},"470":{i:0.000291775842449697,u:"../resources_and_developer_tools/flash-messenger.htm",a:"This tutorial describes how to show a message in the Zed GUI.\n In the controller you can use these shortcut methods to show a user message in the GUI. The messages will be translated later when they are rendered.\n\n \u003c?php\nclass IndexController extends AbstractController\n{\n    public function ...",t:"Flash Messenger"},"471":{i:0.000291775842449697,u:"../resources_and_developer_tools/internal-server-error-handling.htm",a:"This document describes how to configure the behavior when an internal server error occurs. Whether you need to show the details of the error or render a static page for any internal error, this is done through configuration.\n\n Configure Internal Server Error  Page\nDepending on the environment on ...",t:"Internal Server Error Handling"},"472":{i:0.000291775842449697,u:"../resources_and_developer_tools/performance-scalability.htm",a:"Spryker Commerce OS was built to enable the development of high performance e-commerce applications that are able to support an extremely high number of unique visitors. However, no application can be both, light and heavy, at the same time.\n\n Therefore, we have two applications: Yves and Zed. Both ...",t:"Performance and Scalability"},"473":{i:0.00106854284178708,u:"../resources_and_developer_tools/plugin.htm",a:"Plugins are small classes that are used to connect bundles in a flexible and configurable way. In contrast to a direct call to a facade of another module, there can be an array of provided (Undefined variable: General.bundles/modules).\n\n According to our conventions, plugins are the only classes ...",t:"Plugin"},"474":{i:0.000291775842449697,u:"../resources_and_developer_tools/plugin-overview.htm",a:"To see which Plugin can be used in which DependencyProvider we added a feature Plugin Overview. It gives you several ways of displaying our plugin usages.",t:"Plugin Overview | Spryker"},"475":{i:0.000291775842449697,u:"../resources_and_developer_tools/postgres-index-generator.htm",a:"Postgres doesn\u0027t automatically add indexes to foreign key columns. This can lead to performance issues with the database. In MySQL, you will get the indexes for the foreign key columns without the need to do something.  Most likely no one adds indexes for the foreign key columns manually when they ...",t:"Postgres Index Generator"},"476":{i:0.00213521316670048,u:"../resources_and_developer_tools/publish-and-synchronization-reference.htm",a:" To implement Publish and Synchronize in your code, you need to perform the following steps: 1. Add Publish Events Publish and Synchronize are event-driven. To start publishing data to the frontend, an event must be triggered. For this purpose, you need to add events for all changes you want to ...",t:"Publish and Synchronization Reference"},"477":{i:0.000342755685935199,u:"../resources_and_developer_tools/service.htm",a:"Service is a Spryker application layer shared by the Client application layer, the Zed application layer, and Yves application layer. This service layer provides the ability to register a service once and have it applied to both layers. Usage is focused on level details (infrastructure layer). For ...",t:"Service"},"478":{i:0.000291775842449697,u:"../maintenance/maintenance.htm",a:"Maintenance This section is dedicated to information on carrying out maintenance and maintenance-related questions. Specifically, it contains the following topics: Post-Installation Steps and Additional Info     Virtual Machine Cleanup",t:"Maintenance"},"479":{i:0.00116431345635695,u:"../maintenance/post-installation-steps-and-additional-info.htm",a:" Git Configuration If you want to commit from within the VM, it is recommended to set the right Git preferences: git config --global user.email \"your.email@domain.tld\"\ngit config --global user.name \"Your Name\"\ngit config --global push.default simple\ngit config --global pull.rebase true\t\t VM ...",t:"Post-Installation Steps and Additional Info    "},"480":{i:0.000415780747863004,u:"../maintenance/vm-cleanup.htm",a:"Used to be: http://spryker.github.io/getting-started/installation/virtual-machine-cleanup/ If you need to cleanup the environment set up in the virtual machine, you can either do this by running a script or execute the cleanup steps manually.\n\n VM Cleanup - Automatic To cleanup the VM: Run the setup ...",t:"Virtual Machine Cleanup"},"481":{i:0.000291775842449697,u:"../front-end_developer_guide/about-frontend-guide.htm",a:"This section is meant for the front-end developers and contains information on the Spryker front end architecture and concepts. The guide is broken up into the following parts: Yves front-end guidelines  that apply specifically to Yves and contain the following information: The main principles of ...",t:"About Front-End Developer Guide"},"482":{i:0.000327205815424928,u:"../front-end_developer_guide/yves/about-yves-guides.htm",a:"This section applies to Yves and contains information on how the frontend is built in Spryker. Spryker frontend implements a design methodology called atomic design.\n    Due to this, the UI layer of Spryker is called Atomic Frontend. The  Atomic Frontend      guide describes the basic principles of ...",t:"About Yves Guides"},"483":{i:0.000466268490877014,u:"../front-end_developer_guide/yves/atomic-frontend.htm",a:"Spryker Frontend implements the atomic design design. Read about the basic principles of Spryker UI implementation. Spryker UI is based on the component model, atomic design and BEM methodology concepts. ",t:"Atomic Frontend | Spryker"},"484":{i:0.00310829456227461,u:"../front-end_developer_guide/yves/modular-frontend.htm",a:"You will read about Modular Frontend concept which includes pages and widgets. Also, there is information about Pages module and how it can be extended. ",t:"Modular Frontend | Spryker"},"485":{i:0.000291775842449697,u:"../front-end_developer_guide/yves/adding-using-external-libraries-yves.htm",a:"Adding and Using External Library in Your Project via npm To install library and add it to dependencies, run the following command: npm i name-of-library Now you can use it in any component: name-of-your-component.ts \nimport Component from \u0027ShopUi/models/component\u0027;\nimport nameOfLibrary from ...",t:"Adding and Using External Libraries in Yves"},"486":{i:0.000327205815424928,u:"../front-end_developer_guide/zed/about-zed-guides.htm",a:"About Zed Guides This section contains specific information on Zed frontend. In particular, how the  Orix builder  works.",t:"About Zed Guides"},"487":{i:0.00133750815315883,u:"../front-end_developer_guide/zed/oryx/oryx.htm",a:"Oryx is the Spryker projects frontend helper. The purpose of Oryx is to simplify the asset building process, giving developers the freedom to choose and configure the preprocessors for the frontend.\n\n Oryx relies on webpack 2.\n\n Oryx for ZED If you\u0027re looking for Oryx ZED dedicated solution, see  ...",t:"Oryx"},"488":{i:0.0106035028325247,u:"../front-end_developer_guide/zed/oryx/oryx-for-zed.htm",a:" Introduction\n oryx-for-zed is an extension of Oryx that performs a full build for Spryker Zed UI applications. It also provides access to Zed settings and Zed webpack configuration, so you can extend/change the whole building process.\n\n Requirements\n nodejs version 6.x LTS\n npm version \u003e= 3.x or ...",t:"Oryx for Zed "},"489":{i:0.000327205815424928,u:"../front-end_developer_guide/legacy_demoshop/about-legacy-demoshop-guides.htm",a:"The Legacy Demoshop Front-end guides provide information of how the front-end was built in the  Legacy Demoshop . Here you will find the following information: Overview of the Twig Template Engine  used for building the front-end; Twig Templates best practices  providing in-depth information on how ...",t:"About the Legacy Demoshop Front-end Guides"},"490":{i:0.000331508035436007,u:"../front-end_developer_guide/legacy_demoshop/twig_templates/twig-overview.htm",a:" Given that we are working on a web application, we need a proper way to generate HTML dynamically. The most common approach relies on templates and for this we decided to go with Twig Template Engine.\n\n \nYou can use other technology for the front-end of your application as well; this is just a ...",t:"Overview - Twig "},"491":{i:0.000613290281133466,u:"../front-end_developer_guide/legacy_demoshop/twig_templates/twig-best-practices.htm",a:" Include vs Macros vs Embed\n With includes, you can include an entire template. The template has access to any template variables that are currently in scope.\n\n With macros, you are defining a kind of function within Twig that can render a particular component given appropriate objects.\n\n So you ...",t:"Best Practices - Twig Templates "},"492":{i:0.00038110999760133,u:"../front-end_developer_guide/legacy_demoshop/build-optimization.htm",a:"Build and Optimization  We use  Webpack  and  Oryx  for transpiling/building the assets and to optimize the resulting output. For more on Webpack build process and requirements see: Key Concepts Getting started Using a Configuration Configuration Details Learn more about Spryker Oryx frontend ...",t:"Build Optimization"},"493":{i:0.00038110999760133,u:"../front-end_developer_guide/legacy_demoshop/demoshop-guide.htm",a:" Bootstrap the project To install all frontend the external dependecies for Yves and Zed, run in the VM console: cd /path/to/project/root ./setup -i Yves To build assets for Yves, run in the console: cd /path/to/project/root\nnpm run yves # build assets in development mode\nnpm run yves:dev # build ...",t:"Demoshop Guide "},"494":{i:0.00038110999760133,u:"../front-end_developer_guide/legacy_demoshop/development.htm",a:" Development refers to writing your own assets, consuming external dependencies and linking resources to make them work together.\n \nEssentially, the code you’re going to produce can be html, css and javascript (in any of their forms: jade, sass, less, coffescript, ecma 6, react js, etc.).\n\n ...",t:"Development "},"495":{i:0.000662800954697231,u:"../front-end_developer_guide/legacy_demoshop/download-structure.htm",a:" Here you will find out how to download external dependencies and where to place them, together with your own asset files.\n\n This page contains references to the following tools:   Webpack ,  Oryx  (Our frontend helper tool)and Oryx for Zed (Zed\u0027s frontend full automation tool). Make sure you are ...",t:"Download and Structure "},"496":{i:0.000291775842449697,u:"../front-end_developer_guide/legacy_demoshop/frontend-overview.htm",a:" To learn how to build your assets in our Demoshop, read the  Demoshop Guide .\n\n Asset Management\n A set of resources used to build the UI, that includes html, css (or less, sass, stylus, etc.) and js (or jsx, etc.) files, images, fonts and so on.\n Assets are files, a large collection of files; a ...",t:"Frontend Overview "},"497":{i:0.00038110999760133,u:"../front-end_developer_guide/legacy_demoshop/public-folder.htm",a:" To publish means to place the built assets in a place where they can be accessed and loaded by the browser.\n In the whole project, the only place with such access rights is the @project/public folder.\n\n Application Folders\n @project/public/Yves @project/public/Zed These folders contain only ...",t:"Public Folder "},"498":{i:0.000327205815424928,u:"../front-end_developer_guide/miscellaneous/about-miscellaneous.htm",a:"About the Miscellaneous Guides This section contains general front-end related information and includes the following guides: User Interface Guide outlining the basic design rules to help you get started with the front-end implementation of your project.",t:"About the Miscellaneous Guides"},"499":{i:0.0006053311663291,u:"../front-end_developer_guide/miscellaneous/user-interface-guide.htm",a:"User Interface Guide The attached document is aimed for Agencies and Designers. It sets out the basic design rules that will help you get started on designing and implementing the UI for both the front-end(Yves) and back-end(Zed) application when working with Spryker.",t:"User Interface Guide"},"500":{i:0.00032391162986193,u:"../glue_rest_api/glue-rest-api.htm",a:"This article unfolds the basics of the Glue REST API used in the Spryker Commerce OS. Get more information on the functionality and advantages of the REST API.",t:"Glue REST API | Spryker"},"501":{i:0.000429438487145846,u:"../glue_rest_api/glue_api_developer_guides/glue-api-developer-guides.htm",a:"This section introduces you into developing with Glue REST API. Specifically, here you will find an overview of the  Glue API infrastructure ,  security and authentication process  and other important notes on Glue workflow. Not found a guide you are looking for? Let us know about it by  creating an ...",t:"Glue API Developer Guides"},"502":{i:0.000768387051548134,u:"../glue_rest_api/glue_api_developer_guides/glue-infrastructure.htm",a:"The guide will walk you through the process of handling API requests at the Glue layer, including GlueApplication, Resource, and Relationship Modules.",t:"Glue Infrastructure | Spryker"},"503":{i:0.000691997598264002,u:"../glue_rest_api/glue_api_developer_guides/security-and-authentication.htm",a:"This article describes the authorization mechanism used in Spryker, the modules that provide it, as well as user scopes, database tables, and extension points.",t:"Security and Authentication | Spryker"},"504":{i:0.000429438487145846,u:"../glue_rest_api/glue_api_storefront_guides/glue-api-storefront-guides.htm",a:"This section provides an overview of the Glue API feature resources. Here you will find general information about feature resources, detailed endpoint descriptions, available REST verbs along with explanations of any errors that you may encounter. Not found a guide you are looking for? Let us know ...",t:"Glue API Storefront Guides"},"505":{i:0.00232654358164103,u:"../glue_rest_api/glue_api_storefront_guides/authentication-and-authorization.htm",a:"This article provides the list of private resources and describes how to install and use the means needed to work with the sensitive data.",t:"Authentication and Authorization | Spryker"},"506":{i:0.00032391162986193,u:"../glue_rest_api/glue_api_storefront_guides/retrieving-store-configuration.htm",a:"This article explains how to retrieve the store configuration including currencies, countries, locales, and time zones.",t:"Retrieving Store Configuration | Spryker"},"507":{i:0.000291775842449697,u:"../glue_rest_api/glue_api_storefront_guides/retrieving-navigation-trees-201903.htm",a:"The topic demonstrates how to retrieve navigation trees with the help of API endpoints.",t:"Retrieving Navigation Trees | Spryker"},"508":{i:0.00113465435044547,u:"../glue_rest_api/glue_api_storefront_guides/browsing-category-tree.htm",a:"The article helps you get the full category tree, including information on a category node, as well as retrieve categories by product easily and quickly. For this, use this guide that goes you through all the needed steps to reach the goal.",t:"Browsing Category Tree | Spryker"},"509":{i:0.00065221758470877,u:"../glue_rest_api/glue_api_storefront_guides/catalog-search.htm",a:"This article provides a bunch of sample requests to be used to achieve the implementation of search options and gives explanations of request values.",t:"Catalog Search | Spryker"},"510":{i:0.00032391162986193,u:"../glue_rest_api/glue_api_storefront_guides/getting-suggestions-for-autocompletion-and-search.htm",a:"This article provides information on which endpoints to use to get search and auto-completion suggestions for your products, categories, and CMS fields.",t:"Getting Suggestions for Auto-Completion and Search | Spryker"},"511":{i:0.000291775842449697,u:"../glue_rest_api/glue_api_storefront_guides/managing_products/managing-products.htm",a:"In Glue API, there are various product-related resources that allow you to access and manage product information. You can retrieve general information about concrete and abstract products, access product labels etc. See the following guides for more information: Retrieving Product Information ...",t:"Managing Products"},"512":{i:0.000807925232313897,u:"../glue_rest_api/glue_api_storefront_guides/managing_products/retrieving-product-information.htm",a:"This article explains how to get various information and resources of an abstract or concrete product, such as availability, price, taxes, and image sets.",t:"Retrieving Product Information | Spryker"},"513":{i:0.000385914082568583,u:"../glue_rest_api/glue_api_storefront_guides/managing_products/accessing-product-labels.htm",a:"Product labels are used to focus the attention of your customers on a particular product. The article explores how to retrieve a product label by the label ID or product provided in the Product Labels API. ",t:"Accessing Product Labels | Spryker"},"514":{i:0.000476990775760822,u:"../glue_rest_api/glue_api_storefront_guides/managing_products/retrieving-related-products-201903.htm",a:"The article demonstrates how to find alternatives for discontinued products with the help of Glue API endpoints.",t:"Retrieving Related Products | Spryker"},"515":{i:0.000434866863985413,u:"../glue_rest_api/glue_api_storefront_guides/managing_products/retrieving-alternative-products-201903.htm",a:"The article demonstrates how to find alternatives for discontinued products with the help of Glue API endpoints.",t:"Retrieving Alternative Products | Spryker"},"516":{i:0.000880080332537508,u:"../glue_rest_api/glue_api_storefront_guides/managing-customers.htm",a:"This article explains how to manage customer accounts and provides detailed information on which endpoints to use to create, anonymize, etc. a customer.",t:"Managing Customers | Spryker"},"517":{i:0.000915656876755178,u:"../glue_rest_api/glue_api_storefront_guides/managing-wishlists.htm",a:"Using the PATCH, GET, DELETE, and POST request sent to the endpoints provided in the Wishlists API, you can create, access, modify, delete, and to get wishlists. Use this detailed guide to help you handle this functionality for your customers",t:"Managing Wishlists | Spryker"},"518":{i:0.00032391162986193,u:"../glue_rest_api/glue_api_storefront_guides/managing_carts/managing-carts.htm",a:"The Carts API provides access to management of customers\u0027 shopping carts. The carts come in two different forms: carts for registered customers and carts for guests. In your development, the resources provided by the API can support you in the development of shopping cart functionality for ...",t:"Managing Carts"},"519":{i:0.00101060981499469,u:"../glue_rest_api/glue_api_storefront_guides/managing_carts/managing-guest-carts.htm",a:"The Carts API provides access to management of customers\u0027 shopping carts. The following document covers working with guest carts. Guest carts come with an expiration date, which means that unregistered users can use their carts only for a limited time frame.  After the lifetime of a guest cart ...",t:"Managing Guest Carts"},"520":{i:0.00112217084132969,u:"../glue_rest_api/glue_api_storefront_guides/managing_carts/managing-carts-of-registered-users.htm",a:"The Carts API provides access to management of customers\u0027 shopping carts. The following document covers working with carts of registered users. If you want to know how to process carts of registered users, see  Managing Guest Carts . Guest Carts and Carts of Registered Users Access to carts of ...",t:"Managing Carts of Registered Users"},"521":{i:0.00107137106204827,u:"../glue_rest_api/glue_api_storefront_guides/checking-out-purchases-and-getting-checkout-data.htm",a:"The Checkout API allows you to place orders and retrieve checkout information. In order to create a checkout experience, we offer an endpoint that provides you with all checkout data. The data is based on customers themselves and their shopping carts. For registered customers, the endpoint also ...",t:"Checking Out Purchases and Getting Checkout Data"},"522":{i:0.000506045185956039,u:"../glue_rest_api/glue_api_storefront_guides/retrieving-order-history.htm",a:"The guide instantiates a step-by-step procedure how to retrieve a list of orders or a specific order for the customer, including information on items, calculation, billing anf shipping addresses, expenses, payment providers, payment methods, etc. It also provides a detailed description for each attribute of the field.",t:"Retrieving Customer\u0027s Order History | Spryker"},"523":{i:0.000567101131841995,u:"../glue_rest_api/b2c_api_react_example/b2c-api-react-example.htm",a:"B2C API Demo Shop is a single-page web application that deonstrates the use of Spryker Glue REST API in B2C scenarios.",t:"B2C API Demo Shop | Spryker"},});