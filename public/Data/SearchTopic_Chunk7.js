define({"600":{i:0.00195041829753615,u:"../industry_partners/payment/payolution/payolution.htm",a:"Payment Integration - Payolution  Partner Information Payolution provides two methods of payment: Invoice Installment In order to integrate Payolution payments, a Payolution merchant account should be created and configuration data then could be obtained from Payolution. There are two types of ...",t:"Payment Integration — Payolution"},"601":{i:0.00192238300911545,u:"../industry_partners/payment/payolution/payolution-configuration.htm",a:" \n            Add spryker-eco/payolution to your project by running composer require spryker-eco/payolution \n            Please refer to config/config.dist.php for example of module configuration.\n         To setup the initial Payolution configuration, use the credentials you received after ...",t:"Payolution - Configuration  "},"602":{i:0.00192238300911545,u:"../industry_partners/payment/payolution/payolution-installment.htm",a:" Installment Scenarios Standard Case Full Refund Partial Refund Integrating Payolution Installment Payment The In order to integrate installment payment, two simple steps are needed: setting Payolution installment payment configuration and calling the facade functions. Setting Payolution Installment ...",t:"Payolution - Installment Payment  "},"603":{i:0.00192238300911545,u:"../industry_partners/payment/payolution/payolution-invoice.htm",a:" Workflow Scenarios Payments from Payolution to Merchant are not included in the sequence diagrams since they occur on a regular basis (e.g. every week). Integrating Payolution Invoice Payment To integrate invoice payments, two simple steps are needed: setting Payolution invoice payment ...",t:"Payolution - Invoice Payment  "},"604":{i:0.00192238300911545,u:"../industry_partners/payment/payolution/payolution-requests.htm",a:" In order to perform the needed requests, you can easily use the implemented state machine commands and conditions. The next section gives a summary of them. You can also use the facade methods directly which, however, are invoked by the state machine. Payolution State Machine Commands and ...",t:"Payolution - Performing Requests  "},"605":{i:0.00224918534701764,u:"../industry_partners/payment/payolution/payolution-workflow.htm",a:" Both invoice and installment utilize the same request flow. It basically consists of the following requests: Calculation (for installment only): to calculate the installment amounts, dues, and durations. Pre-check (optional): to check the user information in order to make sure that all the needed ...",t:"Payolution - Workflow  "},"606":{i:0.00194507883779867,u:"../industry_partners/payment/ratenkauf_by_easycredit/ratenkauf-by-easycredit-installation-and-configuration.htm",a:"Installation To install Easycredit, run the following command in the console: composer require spryker-eco/easycredit In order to use front-end functionality (JavaScript and CSS) with old Demoshop, the shop-ui-compatibility module is required: composer require spryker-eco/shop-ui-compatibility After ...",t:"Ratenkauf by Easycredit - Installation and Configuration"},"607":{i:0.000324577140010636,u:"../industry_partners/payment/ratepay/ratepay.htm",a:"Payment Integration - RatePAY  Partner Information RatePAY is an online service provider that allows merchants to provide their customers secure, customized payment methods.  RatePAY bears the full risk and takes over the complete processing.\n\n RatePAY provides four methods of payment:\n\n Invoice ...",t:"Payment Integration - Ratepay"},"608":{i:0.000360748585480753,u:"../industry_partners/payment/ratepay/ratepay-direct-debit.htm",a:"(ELV)  Workflow Scenarios\n Integrating RatePAY  Direct Debit Payment\nIn order to integrate direct debit payment, two simple steps are needed: set RatePAY Direct Debit payment configuration and call the facade functions.\n \nSet RatePAY Direct Debit Configuration\n The configuration to integrate Direct ...",t:"RatePAY - Direct Debit"},"609":{i:0.000291775842449697,u:"../industry_partners/payment/ratepay/ratepay-disable-address-updates.htm",a:" To disable updates on addresses from the backend application, follow the steps described below:\n\n Step 1:\n\n Overwrite on project side  ‘/vendor/spryker/spryker/Bundles/Sales/src/Spryker/ Zed/Sales/Presentation/Detail/boxes/addresses.twig’\n Remove ‘Edit’ button\n Step 2:\n\n Overwrite on project side  ...",t:"RatePAY - How to Disable Address Updates from the Backend Application"},"610":{i:0.000291775842449697,u:"../industry_partners/payment/ratepay/ratepay-facade.htm",a:"RatePAY - Facade\n",t:"RatePAY - Facade"},"611":{i:0.000360748585480753,u:"../industry_partners/payment/ratepay/ratepay-installment.htm",a:" The shop must implement the Calculation Request operation to calculate an example installment plan and show it to the customer. Some input parameters for the calculation are passed from the shop (e.g. the shopping basket total), others are stored in the merchant’s RatePAY profile held by the ...",t:"RatePAY - Installment"},"612":{i:0.000360748585480753,u:"../industry_partners/payment/ratepay/ratepay-invoice.htm",a:" Workflow Scenarios\n Integrating RatePAY Invoice Payment\n To integrate invoice payment, you need to: RatePAY invoice payment configuration and call the facade functions.\n Setting RatePAY Invoice Configuration\n The configuration to integrate invoice payments using RatePAY is:\n\n PROFILE_ID: merchant’s ...",t:"RatePAY - Invoice"},"613":{i:0.000291775842449697,u:"../industry_partners/payment/ratepay/ratepay-payment-workflow.htm",a:" RatePAY - Payment Workflow  Invoice, Prepayment and Direct Debit methods have the same request flow.  The payment workflow consists of the following requests:\n PAYMENT INIT - Initialize the transaction and get a valid transaction-id.\n PAYMENT QUERY - Check the customer and order details, perform a ...",t:"RatePAY - Payment Workflow"},"614":{i:0.000360748585480753,u:"../industry_partners/payment/ratepay/ratepay-prepayment.htm",a:" Workflow Scenarios\n Integrating RatePAY Prepayment Payment\n To integrate prepayment payment: set RatePAY prepayment payment configuration and call the facade functions.\n\n Set RatePAY Prepayment Configuration\n The configuration to integrate prepayment payments using RatePAY is:\n\n PROFILE_ID: ...",t:"RatePAY - Prepayment"},"615":{i:0.00121168613849731,u:"../industry_partners/payment/ratepay/ratepay-state-machine.htm",a:" Commands\n ConfirmDelivery\n \nSend delivery confirmation data to RatePAY\n Response:\n Success: Delivery confirmed\n Declined: Request format error or delivery confirmation error\n Plugin: ConfirmDeliveryPlugin ConfirmPayment \n\nSend payment confirmation data to RatePAY\n Response:\n Success: Payment ...",t:"RatePAY - State Machine Commands and Conditions"},"616":{i:0.000291775842449697,u:"../industry_partners/payment/ratepay/ratepay-structure-diag.htm",a:"RatePAY- Core Module Structure Diagram  The RatePAY core module uses the following class structure and flow.\n",t:"RatePAY- Core Module Structure Diagram"},"617":{i:0.000291775842449697,u:"../industry_partners/performance/performance-partners.htm",a:"Choose our partners to boost your performance: Akeneo Akeneo is the next-generation PIM - a PIM that quickly integrates with the existing IT environment through a powerful API, and is a great fit with Spryker\u0027s technologies. Also, Akeneo is uncomplicated, flexible, scalable, easy to use and not ...",t:"Performance Integration Partners"},"618":{i:0.00203343724431918,u:"../industry_partners/performance/akeneo/akeneo.htm",a:"Akeneo is the next-generation PIM with a powerful API which you can use with Spryker. Learn about the advantages of using Akeneo with Spryker.",t:"Product Information Management - Akeneo | Spryker"},"619":{i:0.00202027298565678,u:"../industry_partners/performance/akeneo/akeneo-installation-configuration.htm",a:"Learn how to install and configure the Akeneo module. Global, dependency and import configuration steps are included. Read about the way Spryker treats multi-select attributes from Akeneo. ",t:"Akeneo - Installation and Configuration | Spryker"},"620":{i:0.000316310146316416,u:"../industry_partners/performance/channelpilot.htm",a:"Performance Monitoring - Channel Pilot  Partner Information   Copyright and Disclaimer See  Disclaimer .   Last review date: Jul. 5th, 2018",t:"Performance Monitoring - Channel Pilot "},"621":{i:0.000316310146316416,u:"../industry_partners/performance/datavirtuality.htm",a:"Performance Monitoring - Data Virtuality  Partner Information   Copyright and Disclaimer See  Disclaimer .   Last review date: Jul. 6th, 2018 ",t:"Performance Monitoring - Data Virtuality "},"622":{i:0.00200030519901029,u:"../industry_partners/performance/econda/econda.htm",a:"Integrate Econda performance monitoring service into Spryker Legacy Demoshop",t:"Econda Partner Integration | Spryker"},"623":{i:0.00198118756885433,u:"../industry_partners/performance/econda/econda-cross-sell.htm",a:"Econda - Cross Sell  Cross sell is highly customizable and it depends on your setup. Please refer to  Econda offical documentation . All necessary JS files are already integrated into the module, the only thing you need to do is to add your API key inside the econda_crosssell.twig template: \u003cinput ...",t:"Econda - Cross Sell | Spryker"},"624":{i:0.00198118756885433,u:"../industry_partners/performance/econda/econda-export-csvs.htm",a:"Spryker Commerce OS offers ",t:"Econda - Exporting CSVs | Spryker"},"625":{i:0.00198118756885433,u:"../industry_partners/performance/econda/econda-tracking.htm",a:"Add Econda tracking code to your Spryker project.",t:"Econda - Tracking | Spryker"},"626":{i:0.000291775842449697,u:"../industry_partners/performance/episerver/episerver.htm",a:"Partner Information ABOUT EPISERVER Episerver empowers digital leaders to easily create standout experiences for customers – everywhere they engage, and always with measurable business results. The Episerver Digital Experience Cloud™ unifies digital content, commerce and marketing in one platform, ...",t:"Episerver"},"627":{i:0.000291775842449697,u:"../industry_partners/performance/episerver/episerver-installation-configuration.htm",a:"Installation To install Episerver, run the command in the console: composer require spryker-eco/episerver Configuration To set up the Episerver initial configuration, use the credentials received from your Episerver admin page. The REQUEST_BASE_URL parameter should be: ...",t:"Episerver Installation and Configuration"},"628":{i:0.00198686339890982,u:"../industry_partners/performance/factfinder/factfinder.htm",a:"Search Integration - FACT-Finder  Partner Information Prerequisites\n\n\t\t To integrate with FACT-Finder, you will need your FACT-Finder account. If you do not have a FACT-Finder account, please contact  FACT-Finder .\n Installation\n\t\t \n\t\t\tComposer dependency:\n\n\t\t To install Spryker\u0027s FactFinder module, ...",t:"Search Integration - Fact Finder"},"629":{i:0.00196537350334325,u:"../industry_partners/performance/factfinder/search-factfinder-campaigns.htm",a:" Prerequisites \n            The FACT-Finder Campaign Manager module allows you to target the management of search results in order to improve the customer lead process or deliberately highlight products.\n            Campaigns are activated according to the specific criteria and are then returned ...",t:"FACT-Finder - Campaigns  "},"630":{i:0.00196537350334325,u:"../industry_partners/performance/factfinder/search-factfinder-export-csv.htm",a:" Output Folder  Define an output folder where  the CSV files will be generated by adding the following line in your configuration file: \u003c?php\n$config[FactFinderSdkConstants::CSV_DIRECTORY] = APPLICATION_ROOT_DIR . \u0027/path/to/generated/csv/files\u0027; Zed must have Read / Write access to this folder ...",t:"FACT-Finder - Exporting CSVs"},"631":{i:0.00196537350334325,u:"../industry_partners/performance/factfinder/search-factfinder-recommendation.htm",a:" Prerequisites  The FACT-Finder recommendation engine analyzes product and category relationships. The results are rendered in recommendations widget, which can be displayed on product details pages, homepage or in the shopping cart. Usage   To add recommendations widget to product page, insert the ...",t:"FACT-Finder - Recommendation  "},"632":{i:0.00196537350334325,u:"../industry_partners/performance/factfinder/search-factfinder-search.htm",a:" Prerequisites  FACT-Finder suggests error-tolerant on-site search. The online shop’s search function is its most powerful sales tool. FACT-Finder delivers relevant results even when spelling errors and typos occur. Usage By default, you can use the /fact-finder route to see an example catalog page. ...",t:"FACT-Finder - Search  "},"633":{i:0.00196537350334325,u:"../industry_partners/performance/factfinder/search-factfinder-tracking.htm",a:" Prerequisites Tracking information lets the FACT-Finder Search tool automatically learn from the user behavior. The data provided through this interface can be used for a variety of purposes. They include the tracking of events such as users clicking on a detail page, placing a product into the ...",t:"FACT-Finder - Tracking  "},"634":{i:0.00196537350334325,u:"../industry_partners/performance/factfinder/search-factfinder-suggest.htm",a:" Prerequisites  The FACT-Finder Suggest module enables you to provide customers with suggested search terms while they are entering a search term. In this way, users do not necessarily have to enter the entire search term themselves but can choose a suggestion. As the users are presented with ...",t:"FACT-Finder - Suggest  "},"635":{i:0.000291775842449697,u:"../industry_partners/performance/fact-finder-web-components.htm",a:"Integrate FACT Finder Web Components into your project based on Spryker Commerce OS.",t:"Fact Finder Web Components  Partner Integration | Spryker"},"636":{i:0.000316310146316416,u:"../industry_partners/performance/inxmail.htm",a:" Partner Information Installation To install Inxmail run the command in the console: \n\tcomposer require spryker-eco/inxmail:1.0.0\n\t\t\t\t Configuration To set up the Inxmail initial configuration, use the credentials you received from your Inxmail server. Space id, key id and secret you can get from ...",t:"Email Provider - Inxmail"},"637":{i:0.000291775842449697,u:"../industry_partners/performance/loggly-queue.htm",a:" The Loggly module provides a plugin to read log messages from a queue and send the messages via https to  Loggly . To integrate this plugin you need to have the QueueHandler enabled in your Logger configuration as described  here . In addition you need to properly configure the queue setup for ...",t:"Queue Integration - Loggly "},"638":{i:0.000316310146316416,u:"../industry_partners/performance/magnolia-cms.htm",a:"Content Management - Magnolia CMS  Partner Information   Copyright and Disclaimer See  Disclaimer .   Last review date: Jul. 6th, 2018 ",t:"Content Management - Magnolia CMS"},"639":{i:0.000316310146316416,u:"../industry_partners/performance/mindlab.htm",a:" This integration is built and supported by our industry partner Mindlab Solutions. Partner Information Mindlab Documentation Spryker customers can easily connect to Mindlab and access comprehensive Mindlab e-commerce reporting. On request, this can be individually adapted to customer-specific ...",t:"Analytics Integration - Mindlab "},"640":{i:0.000316310146316416,u:"../industry_partners/performance/minubo.htm",a:" Partner Information General Information The Minubo module provides functionality to export order and customer data that was updated since last run of export. Data exported to Amazon S3 bucket as file with list of JSON-objects. Export process runs in two modes: Automatic mode - every 15 minutes ...",t:"Performance Monitoring - Minubo   "},"641":{i:0.000316310146316416,u:"../industry_partners/performance/new-relic.htm",a:" New Relic Monitoring Spryker enables integration with New Relic for performance monitoring. New Relic contains a set of powerful features that help you monitor the performance and health of your application. To be able to use New Relic you must first get an account. Next, you will need to install ...",t:"Peformance Monitoring - New Relic"},"642":{i:0.000316310146316416,u:"../industry_partners/performance/nitrobox.htm",a:"Performance Monitoring - Nitrobox  Partner Information   Copyright and Disclaimer See  Disclaimer .   Last review date: Jul. 5th, 2018",t:"Performance Monitoring - Nitrobox "},"643":{i:0.000316310146316416,u:"../industry_partners/performance/sevensenders.htm",a:"Partner Information Installation To install Seven Senders, run the command in the console: composer require spryker-eco/sevensenders:1.0.0 Configuration To set up the Seven Senders initial configuration, use the credentials you received from your Seven Senders server. Space id, key id and secret you ...",t:"Seven Senders - the Delivery Platform"},"644":{i:0.000316310146316416,u:"../industry_partners/performance/styla.htm",a:"Performance Monitoring - Styla  Partner Information   Copyright and Disclaimer See  Disclaimer .   See also: Styla documentation Content Marketing in E-Commerce Content Marketing For E-Commerce   Last review date: Jul. 5th, 2018",t:"Performance Monitoring - Styla "},"645":{i:0.000316310146316416,u:"../industry_partners/performance/tideways.htm",a:"Performance Monitoring - Tideways  Partner Information Register  with Tideways now! General information The spryker-eco/tideways module provides a TidewaysMonitoringExtensionPlugin to send monitoring information to the tideways service. Installation To install Tideways module, run: composer require ...",t:"Peformance Monitoring - Tideways"},"646":{i:0.000316310146316416,u:"../industry_partners/performance/trbo.htm",a:"Onsite Marketing - trbo  Partner Information   Copyright and Disclaimer See  Disclaimer .   Last review date: Jul. 13h, 2018 ",t:"Onsite Marketing - trbo"},"647":{i:0.000291775842449697,u:"../about-migration-integration.htm",a:" This section of the documentation is dedicated to content describing all the migration and integration tasks you can possibly have. Module migration guides  explain how to update a module that has structural changes, such as to the database.  Feature integration guides  will guide you through the ...",t:"Welcome to Migration and Integration Guides "},"648":{i:0.000374445779391902,u:"../module_migration_guides/about-migration.htm",a:"When a new major version of a module is released, it means that external API of the module has been changed. The migration guides describe how to update a module to the newer version. They provide manual instructions on how to do it step by step in our system. As you have most likely made structural ...",t:"About Migration Guides"},"649":{i:0.000291775842449697,u:"../module_migration_guides/glue_api/about-glue-api-migration.htm",a:"\n\t\t\tThe Glue API migration guides provide step-by-step implementation on how to manually update a module to a newer version.\n\t\t \n\t\t\tIf you have spotted an issue with either of the guides, please feel free  to create an issue  or pull request by using the Edit on GitHub option.\n\t\t \n\t\t\tNot found a ...",t:"About Glue API Migration Guides"},"650":{i:0.000937696538865977,u:"../module_migration_guides/glue_api/cartsrestapi-migration-guide.htm",a:"Upgrading from version 3.* to 4.0.0 In this new version of CartsRestApi module, we have changed the type of stock and quantity fields from int to float. You can find more details about the changes on   CartsRestApi module release page . This release is a part of the \"Float stock\" concept migration! ...",t:"CartsRestApi Migration Guide"},"651":{i:0.000291775842449697,u:"../module_migration_guides/glue_api/catalogsearchrestapi-migration-guide.htm",a:"Upgrading from Version 1.* to Version 2.* CatalogSearchRestApi version 2 has been improved to work properly with the currency and price mode. Now other modules are responsible to handle these parameters in the request. Also, we have fixed a response structure to meet requirements, namely we have ...",t:"CatalogSearchRestApi Migration Guide"},"652":{i:0.000291775842449697,u:"../module_migration_guides/glue_api/navigationsrestapi-migration-guide.htm",a:"Upgrading from Version 1.* to Version 2.* Version 2.0.0 of the NavigationsRestApi module introduces the resourceId field and a new dependency to the spryker/url-storage module. BC Breaks and Solutions: Set up project configuration Migrate database To upgrade to the new version of the module, do the ...",t:"Migration Guide - NavigationsRestApi"},"653":{i:0.000937696538865977,u:"../module_migration_guides/glue_api/ordersrestapi-migration-guide.htm",a:"OrdersRestApi Migration Guide Upgrading from version 1.* to 2.0.0 In this new version of OrdersRestApi module, we have changed the type of stock and quantity fields from int to float. You can find more details about the changes in   OrdersRestApi module release page . This release is a part of the ...",t:"OrdersRestApi Migration Guide | Spryker"},"654":{i:0.000937696538865977,u:"../module_migration_guides/glue_api/productavailabilitiesrestapi-migration-guide.htm",a:"ProductAvailabilitiesRestApi Migration Guide Upgrading from version 1.* to 2.0.0 In this new version of ProductAvailabilitiesRestApi module, we have changed the type of stock and quantity fields from int to float. You can find more details about the changes in   ProductAvailabilitiesRestApi module ...",t:"ProductAvailabilitiesRestApi Migration Guide | Spryker"},"655":{i:0.000291775842449697,u:"../module_migration_guides/mg-api-module.htm",a:"Upgrading from Version 0.1.5 to Version 0.2.0 Version 0.2.0 of the Api module introduces a default behavior to disable legacy Zed API for security reasons. Some projects actively use and develop Zed API. To continue using legacy Zed API, one has to override the method isApiEnabled of the ApiConfig ...",t:"Migration Guide - API Module"},"656":{i:0.000937696538865977,u:"../module_migration_guides/mg-availability.htm",a:"Availability Module Migration guide contains instructions on how to migrate the Availability module to major versions in Spryker Commerce OS.",t:"Module Migration Guide - Availability | Spryker"},"657":{i:0.000937696538865977,u:"../module_migration_guides/mg-availability-cart-connector.htm",a:"Migration Guide - AvailabilityCartConnector Upgrading from version 4.* to 5.0.0 In this new version of AvailabilityCartConnector module, we have changed the type of stock and quantity fields from int to float. You can find more details about the changes on  AvailabilityCartConnector module release ...",t:"Migration Guide - AvailabilityCartConnector | Spryker"},"658":{i:0.000937696538865977,u:"../module_migration_guides/mg-availability-gui.htm",a:"Migration Guide - AvailabilityGui Upgrading from version 3.* to 4.0.0\n\n In this new version of AvailabilityGui module, we have changed the type of stock and quantity fields from int to float. You can find more details about the changes in  AvailabilityGui module release page . This release is a part ...",t:"Migration Guide - AvailabilityGui | Spryker"},"659":{i:0.000937696538865977,u:"../module_migration_guides/mg-availability-offer-connector.htm",a:"Migration Guide - AvailabilityOfferConnector Upgrading from version 1.* to 2.0.0 In this new version of AvailabilityOfferConnector module, we have changed the type of stock and quantity fields from int to float. You can find more details about the changes in  AvailabilityOfferConnector module ...",t:"Migration Guide - AvailabilityOfferConnector | Spryker"},"660":{i:0.000291775842449697,u:"../module_migration_guides/mg-business-on-behalf-data-import.htm",a:"Upgrading from Version 1.1.0 to Version 2.0.0 In this version, the import key company-user has been assigned to the CompanyUserDataImport. BusinessOnBehalfDataImport now uses company-user-on-behalf. To migrate, just use the other key because the previous was repurposed. Therefore, if you have any ...",t:"Migration Guide - Business On Behalf Data Import"},"661":{i:0.00354864230279125,u:"../module_migration_guides/mg-calculation.htm",a:" Upgrading from Version 3.* to Version 4.* To upgrade from 3* to 4*, composer update your calculator to version 4. Updating Calculator Stacks In the new version there are two new calculator stacks, getQuoteCalculatorPluginStack and getOrderCalculatorPluginStack. They are both defined in ...",t:"Migration Guide - Calculation    "},"662":{i:0.00238338184098814,u:"../module_migration_guides/mg-cart.htm",a:" Upgrading from version 5.* to 6.0.0 In this new version of Cart module, we have changed the type of stock and quantity fields from int to float. You can find more details about the changes in   Cart module release page . This release is a part of the \"Float stock\" concept migration! When you ...",t:"Migration Guide - Cart "},"663":{i:0.000937696538865977,u:"../module_migration_guides/mg-cart-page.htm",a:"Migration Guide - CartPage Upgrading from version 1.* to 2.0.0 In this new version of CartPage module, we have changed the type of stock and quantity fields from int to float. You can find more details about the changes on   CartPage module release page . This release is a part of the \"Float stock\" ...",t:"Migration Guide - CartPage | Spryker"},"664":{i:0.000937696538865977,u:"../module_migration_guides/mg-cart-extension.htm",a:"Migration Guide - CartExtension  Upgrading from version 2.* to 3.0.0 \n\nIn this new version of CartExtension module, we have changed the type of stock and quantity fields from int to float. You can find more details about the changes in   CartExtension module release page . This release is a part of ...",t:"Migration Guide - CartExtension | Spryker"},"665":{i:0.000291775842449697,u:"../module_migration_guides/mg-catalog.htm",a:" Upgrading from Version 3.* to Version 4.* Due to introducing the Suggestion Search feature, the Catalog bundle now requires Search \u003e=5.2.\n\n To upgrade from 3.* to 4.*:\n\n Before upgrading to the new version, make sure that you do not use any deprecated code from version 3.*. Check the description of ...",t:"Migration Guide - Catalog   "},"666":{i:0.000539785653276311,u:"../module_migration_guides/mg-category.htm",a:"Learn how to migrate the Category module from version 3.* to version 4.*. ",t:"Migration Guide - Category | Spryker"},"667":{i:0.000937696538865977,u:"../module_migration_guides/mg-checkout.htm",a:" Upgrading from version 4.* to 5.0.0 In this new version of Checkout module, we have changed the type of stock and quantity fields from int to float. You can find more details about the changes in   Checkout module release page . This release is a part of the \"Float stock\" concept migration! When ...",t:"Migration Guide - Checkout   "},"668":{i:0.000448160466826672,u:"../module_migration_guides/mg-cms.htm",a:" Upgrading from Version 6.* to Version 7.* Version 7.0.0 of the CMS module introduces the  multi-store functionality . The multi-store CMS page feature enables management of CMS page display per store via a store toggle control in the Admin UI. BC breaks and solutions: Update deprecated methods and ...",t:"Migration Guide - CMS"},"669":{i:0.00194507883779867,u:"../module_migration_guides/mg-cms-gui.htm",a:"Upgrading from Version 4.* to Version 5.* Version 5 of the CMSGui module introduces the  multi-store functionality . The multi-store CMS page feature enables management of CMS page display per store via a store toggle control in the Admin UI. To enable the feature, make sure you have the store ...",t:"Migration Guide - CMSGui"},"670":{i:0.00170203427940711,u:"../module_migration_guides/mg-cms-block.htm",a:" Upgrading from Version 1.* to Version 2.* This version allows to save CMS Block-Store relation. Update spryker/cms-block module to at least Version 2.0.0. \n                Update your spryker/cms-block-collector module to at least Version 2.0.0.\n                You can find additional guide to ...",t:"Migration Guide - CMS Block"},"671":{i:0.0021784842269228,u:"../module_migration_guides/mg-cms-block-category-connector.htm",a:" Upgrading from Version 1.* to Version 2.* Due to introducing the CMS Block positioning and CMS Block templates for Category, the CMS Block Category Connector module now requires Category \u003e=4.0. The migration will contain the following steps: New module installation Deprecations migration Database ...",t:"Migration Guide - CMS Block Category Connector"},"672":{i:0.00221955704097476,u:"../module_migration_guides/mg-cms-block-category-connector-console.htm",a:" Click here to expand CMS Block Category Connector Migration script \n\u003c?php\n\n/**\n * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.\n * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.\n */\n\nnamespace ...",t:"Migration Guide - CMS Block Category Connector Migration Console   "},"673":{i:0.00176806433754189,u:"../module_migration_guides/mg-cms-block-collector.htm",a:" Upgrading from Version 1.* to Version 2.* This version provides support for multi-store CMS Block handling. Update spryker/cms-block-collector module to at least Version 2.0.0. Update spryker/collector module to at least Version 6.0.0. You can find additional guide to migration  here . ...",t:"Migration Guide - CMS Block Collector"},"674":{i:0.00159229075953978,u:"../module_migration_guides/mg-cms-block-gui.htm",a:" Upgrading from Version 1.* to Version 2.* This version adds support to manage CMS Block-store relation through the dedicated CMS Block Administration Intrerface. Installl/update spryker/cms-block to at least Version 2.0.0. You can find additional guide to migration  here . Upgrade ...",t:"Migration Guide - CMS Block GUI"},});