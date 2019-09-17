define({"669":{i:0.00108767786156632,u:"../industry_partners/payment/computop/computop-sofort.htm",a:" Example State Machine: Front-End Integration \n    To adjust the frontend appearance, provide the following templates in your theme directory:\n src/\u003cproject_name\u003e/Yves/Computop/Theme/\u003ccustom_theme_name\u003e/sofort.twig State Machine Integration The Computop provides a demo state machine for Sofort ...",t:"Computop - Sofort  "},"670":{i:0.00117172688033329,u:"../industry_partners/payment/computop/computop-crif.htm",a:" General Information About CRIF Popular with customers, risky for the merchant: Payment methods such as direct debit or purchase on account involve a high level of default risk. Computop Paycontrol, an automated credit rating with all standard credit agencies, combines flexibility and payment ...",t:"Computop - CRIF"},"671":{i:0.00103198662827626,u:"../industry_partners/payment/crefopay/crefopay.htm",a:"The Spryker CrefoPay bundle provides integration of Spryker e-commerce system with CrefoPay industry partner through API calls. Integration with checkout process and OMS (Order Management System) is provided.",t:"Payment Integration - CrefoPay | Spryker"},"672":{i:0.00101206584448494,u:"../industry_partners/payment/crefopay/crefopay-configuration.htm",a:"Configure your shop to use CrefoPay payment. All the payment methods are included.",t:"CrefoPay - Provided Payment Methods | Spryker"},"673":{i:0.00101206584448494,u:"../industry_partners/payment/crefopay/crefopay-integration.htm",a:"Learn how to integrate Adyen payment provider into your Spryker project.",t:"CrefoPay - Integration | Spryker"},"674":{i:0.00111010158878594,u:"../industry_partners/payment/crefopay/crefopay-provided-payment-methods.htm",a:"Spryker CrefoPay integration provides the following payment methods: Bill, Cash on Delivery, Credit Card, Credit, Card 3D, Direct Debit, PayPal, Cash in advance, SofortÜberweisung.",t:"CrefoPay - Provided Payment Methods | Spryker"},"675":{i:0.00240506465716189,u:"../industry_partners/payment/heidelpay/heidelpay.htm",a:"To use Heidelpay with Spryker, install Heidelpay, integrate Heidelpay into your project, configure selected payment methods (Paypal Authorize, Payal Debit, Credit Card, iDeal, Sofort, Easy Credit, Sofort), and build your own workflow by creating a new OMS which will use Hidelpay.\r\n",t:"Industry Partner Payment Integration - Heidelpay | Spryker"},"676":{i:0.00238161808659188,u:"../industry_partners/payment/heidelpay/v1_0/heidelpay-installation.htm",a:" To install Heidelpay, if necessary, add  the Heidelpay repo to your repositories in composer.json: \"repositories\": [\n  ...\n  {\n    \"type\": \"git\",\n    \"url\": \"https://github.com/spryker-eco/Heidelpay.git\"\n  }\n    ], and run the following console command: composer require spryker-eco/heidelpay   See ...",t:"Heidelpay - Installation  "},"677":{i:0.00238161808659188,u:"../industry_partners/payment/heidelpay/v1_0/heidelpay-integration.htm",a:"Heidelpay - Integration to Your Project\n  Configuration You can copy over configs to your config from the Heidelpay\u0027s moduleconfig.dist.php file.\n         \n       The most important configuration items are explained in the table below,\n        make sure to get the required configuration items from ...",t:"Heidelpay - Integration to Your Project\n "},"678":{i:0.000244192040663408,u:"../industry_partners/payment/heidelpay/scos/heidelpai-integration-scos.htm",a:"Heidelpay Integration into SCOS contains two steps: back-end and front-end integration. To integrate Heidelpay into SCOs, follow the steps described in the article.",t:"Heidelpay - Integration into SCOS | Spryker"},"679":{i:0.000244192040663408,u:"../industry_partners/payment/heidelpay/scos/heidelpay-configuration-scos.htm",a:"Heidelpay Configuration for SCOS contains instructions necessary for configuration of Heidelpay module into SCOS. The configuration consists of several steps: the configuration of the base settings, the configuration of store sensitive settings, and ",t:"Heidelpay Configuration for SCOS | Spryker"},"680":{i:0.000448625561944963,u:"../industry_partners/payment/heidelpay/v1_0/heidelpay-authorize.htm",a:"Integrate Paypal Authorize payment through Heidelpay into Spryker Legacy Demoshop",t:"Heidelpay Partner Integration - Paypal Authorize | Spryker"},"681":{i:0.000490996127773143,u:"../industry_partners/payment/heidelpay/v1_0/heidelpay-easy-credit.htm",a:"Integrate Easy Credit payment through Heidelpay into Spryker Legacy Demoshop.",t:"Heidelpay Partner Integration - Easy Credit | Spryker"},"682":{i:0.000448625561944963,u:"../industry_partners/payment/heidelpay/v1_0/heidelpay-direct-debit.htm",a:"Setup The following configuration should be made after Heidelpay has been  installed  and  integrated . Configuration $config[HeidelpayConstants::CONFIG_HEIDELPAY_TRANSACTION_CHANNEL_DIRECT_DEBIT] = \u0027\u0027; //You can use public test account for testing with channel `31HA07BC8142C5A171749A60D979B6E4` but ...",t:"Heidelpay - Direct Debit"},"683":{i:0.000448625561944963,u:"../industry_partners/payment/heidelpay/v1_0/heidelpay-invoice-secured-b2c.htm",a:"Setup The following configuration should be made after Heidelpay has been  installed  and  integrated . Configuration $config[HeidelpayConstants::CONFIG_HEIDELPAY_TRANSACTION_CHANNEL_INVOICE_SECURED_B2C] = \u0027\u0027; //You can use public test account for testing with channel ...",t:"Heidelpay - Invoice Secured B2C Payment"},"684":{i:0.000244192040663408,u:"../industry_partners/payment/heidelpay/v1_0/heidelpay-split-payment-marketplace.htm",a:"Setup The following configuration should be made after Heidelpay has been  installed  and  integrated . Configuration Example: // Heidelpay Split-payment marketplace logic\n$config[HeidelpayConstants::CONFIG_IS_SPLIT_PAYMENT_ENABLED_KEY] = true; Project Implementation A project level should set quote ...",t:"Heidelpay - Split-payment Marketplace"},"685":{i:0.00237636956678423,u:"../industry_partners/payment/heidelpay/v1_0/heidelpay-credit-card.htm",a:"Integrate Credit Card Secure payment through Heidelpay into Spryker Legacy Demoshop.",t:"Heidelpay Partner Integration - Credit Card Secure | Spryker"},"686":{i:0.00237636956678423,u:"../industry_partners/payment/heidelpay/v1_0/heidelpay-paypal-debit.htm",a:" Setup The following configuration should be made after Heidelpay has been  installed  and  integrated . Configuration Example (for testing only): $config[HeidelpayConstants::CONFIG_HEIDELPAY_TRANSACTION_CHANNEL_PAYPAL] = \u002731HA07BC8142C5A171749A60D979B6E4\u0027; This value should be taken from HEIDELPAY ...",t:"Heidelpay - Paypal Debit Workflow  "},"687":{i:0.00193675492962883,u:"../industry_partners/payment/heidelpay/v1_0/heidelpay-error-workflow.htm",a:"Workflow for Errors article describes",t:"Heidelpay Partner Integration - Workflow for Errors | Spryker"},"688":{i:0.00211905200184134,u:"../industry_partners/payment/heidelpay/v1_0/heidelpay-sofort.htm",a:" Setup The following configuration should be made after Heidelpay has been  installed  and  integrated . Configuration Example (for testing only): $config[HeidelpayConstants::CONFIG_HEIDELPAY_TRANSACTION_CHANNEL_SOFORT] = \u002731HA07BC8142C5A171749CDAA43365D2\u0027; \n    Checkout Payment Step Display ...",t:"Heidelay - Sofort (Online Transfer)  "},"689":{i:0.00211905200184134,u:"../industry_partners/payment/heidelpay/v1_0/heidelpay-ideal.htm",a:" Setup The following configuration should be made after Heidelpay has been  installed  and  integrated . Configuration Example (for testing only): $config[HeidelpayConstants::CONFIG_HEIDELPAY_TRANSACTION_CHANNEL_IDEAL] = \u002731HA07BC8142C5A171744B56E61281E5\u0027; This value should be taken from HEIDELPAY. ...",t:"Heidelpay - iDeal  "},"690":{i:0.000269757058129955,u:"../industry_partners/payment/klarna/klarna.htm",a:" Partner Information Klarna Invoice The option to pay after delivery makes buying quicker and easier for customers. With Klarna’s Pay Later, shoppers do not need to fill out lengthy personal details or enter card numbers at the online point of sale. The transaction can be completed with only name, ...",t:"Payment Integration  - Klarna"},"691":{i:0.00162897439958137,u:"../industry_partners/payment/payolution/payolution.htm",a:"Payment Integration - Payolution  Partner Information Payolution provides two methods of payment: Invoice Installment In order to integrate Payolution payments, a Payolution merchant account should be created and configuration data then could be obtained from Payolution. There are two types of ...",t:"Payment Integration — Payolution"},"692":{i:0.0016071239639466,u:"../industry_partners/payment/payolution/payolution-configuration.htm",a:" \n            Add spryker-eco/payolution to your project by running composer require spryker-eco/payolution \n            Please refer to config/config.dist.php for example of module configuration.\n         To setup the initial Payolution configuration, use the credentials you received after ...",t:"Payolution - Configuration  "},"693":{i:0.0016071239639466,u:"../industry_partners/payment/payolution/payolution-installment.htm",a:" Installment Scenarios Standard Case Full Refund Partial Refund Integrating Payolution Installment Payment The In order to integrate installment payment, two simple steps are needed: setting Payolution installment payment configuration and calling the facade functions. Setting Payolution Installment ...",t:"Payolution - Installment Payment  "},"694":{i:0.0016071239639466,u:"../industry_partners/payment/payolution/payolution-invoice.htm",a:" Workflow Scenarios Payments from Payolution to Merchant are not included in the sequence diagrams since they occur on a regular basis (e.g. every week). Integrating Payolution Invoice Payment To integrate invoice payments, two simple steps are needed: setting Payolution invoice payment ...",t:"Payolution - Invoice Payment  "},"695":{i:0.0016071239639466,u:"../industry_partners/payment/payolution/payolution-requests.htm",a:" In order to perform the needed requests, you can easily use the implemented state machine commands and conditions. The next section gives a summary of them. You can also use the facade methods directly which, however, are invoked by the state machine. Payolution State Machine Commands and ...",t:"Payolution - Performing Requests  "},"696":{i:0.00188033353262207,u:"../industry_partners/payment/payolution/payolution-workflow.htm",a:" Both invoice and installment utilize the same request flow. It basically consists of the following requests: Calculation (for installment only): to calculate the installment amounts, dues, and durations. Pre-check (optional): to check the user information in order to make sure that all the needed ...",t:"Payolution - Workflow  "},"697":{i:0.00162789614818602,u:"../industry_partners/payment/ratenkauf_by_easycredit/ratenkauf-by-easycredit-installation-and-configuration.htm",a:"Installation To install Easycredit, run the following command in the console: composer require spryker-eco/easycredit In order to use front-end functionality (JavaScript and CSS) with old Demoshop, the shop-ui-compatibility module is required: composer require spryker-eco/shop-ui-compatibility After ...",t:"Ratenkauf by Easycredit - Installation and Configuration"},"698":{i:0.000269757058129955,u:"../industry_partners/payment/ratepay/ratepay.htm",a:"Payment Integration - RatePAY  Partner Information RatePAY is an online service provider that allows merchants to provide their customers secure, customized payment methods.  RatePAY bears the full risk and takes over the complete processing.\n\n RatePAY provides four methods of payment:\n\n Invoice ...",t:"Payment Integration - Ratepay"},"699":{i:0.000301515517208059,u:"../industry_partners/payment/ratepay/ratepay-direct-debit.htm",a:"(ELV)  Workflow Scenarios\n Integrating RatePAY  Direct Debit Payment\nIn order to integrate direct debit payment, two simple steps are needed: set RatePAY Direct Debit payment configuration and call the facade functions.\n \nSet RatePAY Direct Debit Configuration\n The configuration to integrate Direct ...",t:"RatePAY - Direct Debit"},"700":{i:0.000244192040663408,u:"../industry_partners/payment/ratepay/ratepay-disable-address-updates.htm",a:" To disable updates on addresses from the backend application, follow the steps described below:\n\n Step 1:\n\n Overwrite on project side  ‘/vendor/spryker/spryker/Bundles/Sales/src/Spryker/ Zed/Sales/Presentation/Detail/boxes/addresses.twig’\n Remove ‘Edit’ button\n Step 2:\n\n Overwrite on project side  ...",t:"RatePAY - How to Disable Address Updates from the Backend Application"},"701":{i:0.000244192040663408,u:"../industry_partners/payment/ratepay/ratepay-facade.htm",a:"RatePAY - Facade\n",t:"RatePAY - Facade"},"702":{i:0.000301515517208059,u:"../industry_partners/payment/ratepay/ratepay-installment.htm",a:" The shop must implement the Calculation Request operation to calculate an example installment plan and show it to the customer. Some input parameters for the calculation are passed from the shop (e.g. the shopping basket total), others are stored in the merchant’s RatePAY profile held by the ...",t:"RatePAY - Installment"},"703":{i:0.000301515517208059,u:"../industry_partners/payment/ratepay/ratepay-invoice.htm",a:" Workflow Scenarios\n Integrating RatePAY Invoice Payment\n To integrate invoice payment, you need to: RatePAY invoice payment configuration and call the facade functions.\n Setting RatePAY Invoice Configuration\n The configuration to integrate invoice payments using RatePAY is:\n\n PROFILE_ID: merchant’s ...",t:"RatePAY - Invoice"},"704":{i:0.000244192040663408,u:"../industry_partners/payment/ratepay/ratepay-payment-workflow.htm",a:" RatePAY - Payment Workflow  Invoice, Prepayment and Direct Debit methods have the same request flow.  The payment workflow consists of the following requests:\n PAYMENT INIT - Initialize the transaction and get a valid transaction-id.\n PAYMENT QUERY - Check the customer and order details, perform a ...",t:"RatePAY - Payment Workflow"},"705":{i:0.000301515517208059,u:"../industry_partners/payment/ratepay/ratepay-prepayment.htm",a:" Workflow Scenarios\n Integrating RatePAY Prepayment Payment\n To integrate prepayment payment: set RatePAY prepayment payment configuration and call the facade functions.\n\n Set RatePAY Prepayment Configuration\n The configuration to integrate prepayment payments using RatePAY is:\n\n PROFILE_ID: ...",t:"RatePAY - Prepayment"},"706":{i:0.00101305801310387,u:"../industry_partners/payment/ratepay/ratepay-state-machine.htm",a:" Commands\n ConfirmDelivery\n \nSend delivery confirmation data to RatePAY\n Response:\n Success: Delivery confirmed\n Declined: Request format error or delivery confirmation error\n Plugin: ConfirmDeliveryPlugin ConfirmPayment \n\nSend payment confirmation data to RatePAY\n Response:\n Success: Payment ...",t:"RatePAY - State Machine Commands and Conditions"},"707":{i:0.000244192040663408,u:"../industry_partners/payment/ratepay/ratepay-structure-diag.htm",a:"RatePAY- Core Module Structure Diagram  The RatePAY core module uses the following class structure and flow.\n",t:"RatePAY- Core Module Structure Diagram"},"708":{i:0.000244192040663408,u:"../industry_partners/performance/performance-partners.htm",a:"Choose our partners to boost your performance: Akeneo Akeneo is the next-generation PIM - a PIM that quickly integrates with the existing IT environment through a powerful API, and is a great fit with Spryker\u0027s technologies. Also, Akeneo is uncomplicated, flexible, scalable, easy to use and not ...",t:"Performance Integration Partners"},"709":{i:0.00170184655026083,u:"../industry_partners/performance/akeneo/akeneo.htm",a:"Akeneo is the next-generation PIM with a powerful API which you can use with Spryker. Learn about the advantages of using Akeneo with Spryker.",t:"Product Information Management - Akeneo | Spryker"},"710":{i:0.00169082830298441,u:"../industry_partners/performance/akeneo/akeneo-installation-configuration.htm",a:"Learn how to install and configure the Akeneo module. Global, dependency and import configuration steps are included. Read about the way Spryker treats multi-select attributes from Akeneo. ",t:"Akeneo - Installation and Configuration | Spryker"},"711":{i:0.000264725213422253,u:"../industry_partners/performance/channelpilot.htm",a:"Performance Monitoring - Channel Pilot  Partner Information   Copyright and Disclaimer See  Disclaimer .   Last review date: Jul. 5th, 2018",t:"Performance Monitoring - Channel Pilot "},"712":{i:0.000264725213422253,u:"../industry_partners/performance/datavirtuality.htm",a:"Performance Monitoring - Data Virtuality  Partner Information   Copyright and Disclaimer See  Disclaimer .   Last review date: Jul. 6th, 2018 ",t:"Performance Monitoring - Data Virtuality "},"713":{i:0.00167411668811671,u:"../industry_partners/performance/econda/econda.htm",a:"Integrate Econda performance monitoring service into Spryker Legacy Demoshop",t:"Econda Partner Integration | Spryker"},"714":{i:0.00165811682050019,u:"../industry_partners/performance/econda/econda-cross-sell.htm",a:"Econda - Cross Sell  Cross sell is highly customizable and it depends on your setup. Please refer to  Econda offical documentation . All necessary JS files are already integrated into the module, the only thing you need to do is to add your API key inside the econda_crosssell.twig template: \u003cinput ...",t:"Econda - Cross Sell | Spryker"},"715":{i:0.00165811682050019,u:"../industry_partners/performance/econda/econda-export-csvs.htm",a:"Spryker Commerce OS offers ",t:"Econda - Exporting CSVs | Spryker"},"716":{i:0.00165811682050019,u:"../industry_partners/performance/econda/econda-tracking.htm",a:"Add Econda tracking code to your Spryker project.",t:"Econda - Tracking | Spryker"},"717":{i:0.000244192040663408,u:"../industry_partners/performance/econda/econda-frontend-integration.htm",a:"Econda - Frontend Integration (SCOS Compatible) Check  this article  to learn about Spryker Commerce OS (SCOS). Include Econda Libraries and Scripts for Tracking and Cross-sell Econda scripts are recommended to be connected at all the shop pages. To implement that: Place Econda libraries into ...",t:"Econda - Frontend Integration (Suite Compatible) | Spryker "},"718":{i:0.000244192040663408,u:"../industry_partners/performance/episerver/episerver.htm",a:"Partner Information ABOUT EPISERVER Episerver empowers digital leaders to easily create standout experiences for customers – everywhere they engage, and always with measurable business results. The Episerver Digital Experience Cloud™ unifies digital content, commerce and marketing in one platform, ...",t:"Episerver"},"719":{i:0.000244192040663408,u:"../industry_partners/performance/episerver/episerver-installation-configuration.htm",a:"Installation To install Episerver, run the command in the console: composer require spryker-eco/episerver Configuration To set up the Episerver initial configuration, use the credentials received from your Episerver admin page. The REQUEST_BASE_URL parameter should be: ...",t:"Episerver Installation and Configuration"},"720":{i:0.00165146328141781,u:"../industry_partners/performance/factfinder/factfinder.htm",a:"Search Integration - FACT-Finder  Partner Information Prerequisites\n\n\t\t To integrate with FACT-Finder, you will need your FACT-Finder account. If you do not have a FACT-Finder account, please contact  FACT-Finder .\n Installation\n\t\t \n\t\t\tComposer dependency:\n\n\t\t To install Spryker\u0027s FactFinder module, ...",t:"Search Integration - Fact Finder"},"721":{i:0.00163934278273097,u:"../industry_partners/performance/factfinder/search-factfinder-campaigns.htm",a:" Prerequisites \n            The FACT-Finder Campaign Manager module allows you to target the management of search results in order to improve the customer lead process or deliberately highlight products.\n            Campaigns are activated according to the specific criteria and are then returned ...",t:"FACT-Finder - Campaigns  "},"722":{i:0.00163934278273097,u:"../industry_partners/performance/factfinder/search-factfinder-export-csv.htm",a:" Output Folder  Define an output folder where  the CSV files will be generated by adding the following line in your configuration file: \u003c?php\n$config[FactFinderSdkConstants::CSV_DIRECTORY] = APPLICATION_ROOT_DIR . \u0027/path/to/generated/csv/files\u0027; Zed must have Read / Write access to this folder ...",t:"FACT-Finder - Exporting CSVs"},"723":{i:0.00163934278273097,u:"../industry_partners/performance/factfinder/search-factfinder-recommendation.htm",a:" Prerequisites  The FACT-Finder recommendation engine analyzes product and category relationships. The results are rendered in recommendations widget, which can be displayed on product details pages, homepage or in the shopping cart. Usage   To add recommendations widget to product page, insert the ...",t:"FACT-Finder - Recommendation  "},"724":{i:0.00163934278273097,u:"../industry_partners/performance/factfinder/search-factfinder-search.htm",a:" Prerequisites  FACT-Finder suggests error-tolerant on-site search. The online shop’s search function is its most powerful sales tool. FACT-Finder delivers relevant results even when spelling errors and typos occur. Usage By default, you can use the /fact-finder route to see an example catalog page. ...",t:"FACT-Finder - Search  "},"725":{i:0.00163934278273097,u:"../industry_partners/performance/factfinder/search-factfinder-tracking.htm",a:" Prerequisites Tracking information lets the FACT-Finder Search tool automatically learn from the user behavior. The data provided through this interface can be used for a variety of purposes. They include the tracking of events such as users clicking on a detail page, placing a product into the ...",t:"FACT-Finder - Tracking  "},"726":{i:0.00163934278273097,u:"../industry_partners/performance/factfinder/search-factfinder-suggest.htm",a:" Prerequisites  The FACT-Finder Suggest module enables you to provide customers with suggested search terms while they are entering a search term. In this way, users do not necessarily have to enter the entire search term themselves but can choose a suggestion. As the users are presented with ...",t:"FACT-Finder - Suggest  "},"727":{i:0.000244192040663408,u:"../industry_partners/performance/factfinder/fact-finder-ng.htm",a:"Installation To install the package use composer require spryker-eco/fact-finder-ng command. Configuration For using the package you have to set configuration parameters. $config[FactFinderNgConstants::FACT_FINDER_URL] = \u0027\u0027; # Fact-Finder URL\n$config[FactFinderNgConstants::FACT_FINDER_CHANNEL] = \u0027\u0027; ...",t:"FACT-Finder - NG"},"728":{i:0.000244192040663408,u:"../industry_partners/performance/fact-finder-web-components.htm",a:"Integrate FACT Finder Web Components into your project based on Spryker Commerce OS.",t:"Fact Finder Web Components  Partner Integration | Spryker"},"729":{i:0.000264725213422253,u:"../industry_partners/performance/inxmail.htm",a:" Partner Information Installation To install Inxmail run the command in the console: \n\tcomposer require spryker-eco/inxmail:1.0.0\n\t\t\t\t Configuration To set up the Inxmail initial configuration, use the credentials you received from your Inxmail server. Space id, key id and secret you can get from ...",t:"Email Provider - Inxmail"},"730":{i:0.000244192040663408,u:"../industry_partners/performance/loggly-queue.htm",a:" The Loggly module provides a plugin to read log messages from a queue and send the messages via https to  Loggly . To integrate this plugin you need to have the QueueHandler enabled in your Logger configuration as described  here . In addition you need to properly configure the queue setup for ...",t:"Queue Integration - Loggly "},"731":{i:0.000264725213422253,u:"../industry_partners/performance/magnolia-cms.htm",a:"Content Management - Magnolia CMS  Partner Information   Copyright and Disclaimer See  Disclaimer .   Last review date: Jul. 6th, 2018 ",t:"Content Management - Magnolia CMS"},"732":{i:0.000264725213422253,u:"../industry_partners/performance/mindlab.htm",a:" This integration is built and supported by our industry partner Mindlab Solutions. Partner Information Mindlab Documentation Spryker customers can easily connect to Mindlab and access comprehensive Mindlab e-commerce reporting. On request, this can be individually adapted to customer-specific ...",t:"Analytics Integration - Mindlab "},"733":{i:0.000264725213422253,u:"../industry_partners/performance/minubo.htm",a:" Partner Information General Information The Minubo module provides functionality to export order and customer data that was updated since last run of export. Data exported to Amazon S3 bucket as file with list of JSON-objects. Export process runs in two modes: Automatic mode - every 15 minutes ...",t:"Performance Monitoring - Minubo   "},"734":{i:0.000264725213422253,u:"../industry_partners/performance/new-relic.htm",a:"Performance Monitoring - New Relic  New Relic Monitoring Spryker enables integration with New Relic for performance monitoring. New Relic contains a set of powerful features that help you monitor the performance and health of your application. To be able to use New Relic, first, you need to get an ...",t:"Peformance Monitoring - New Relic"},"735":{i:0.000264725213422253,u:"../industry_partners/performance/nitrobox.htm",a:"Performance Monitoring - Nitrobox  Partner Information   Copyright and Disclaimer See  Disclaimer .   Last review date: Jul. 5th, 2018",t:"Performance Monitoring - Nitrobox "},"736":{i:0.000264725213422253,u:"../industry_partners/performance/sevensenders.htm",a:"Partner Information Installation To install Seven Senders, run the command in the console: composer require spryker-eco/sevensenders:1.0.0 Configuration To set up the Seven Senders initial configuration, use the credentials you received from your Seven Senders server. Space id, key id and secret you ...",t:"Seven Senders - the Delivery Platform"},"737":{i:0.000264725213422253,u:"../industry_partners/performance/styla.htm",a:"Performance Monitoring - Styla  Partner Information   Copyright and Disclaimer See  Disclaimer .   See also: Styla documentation Content Marketing in E-Commerce Content Marketing For E-Commerce   Last review date: Jul. 5th, 2018",t:"Performance Monitoring - Styla "},"738":{i:0.000264725213422253,u:"../industry_partners/performance/tideways.htm",a:"Performance Monitoring - Tideways  Partner Information Register  with Tideways now! General information The spryker-eco/tideways module provides a TidewaysMonitoringExtensionPlugin to send monitoring information to the tideways service. Installation To install Tideways module, run: composer require ...",t:"Peformance Monitoring - Tideways"},"739":{i:0.000264725213422253,u:"../industry_partners/performance/trbo.htm",a:"Onsite Marketing - trbo  Partner Information   Copyright and Disclaimer See  Disclaimer .   Last review date: Jul. 13h, 2018 ",t:"Onsite Marketing - trbo"},"740":{i:0.000244192040663408,u:"../industry_partners/feature_partners/feature-partners.htm",a:"This section contains information on configuring and integrating the features and modules that have been developed together with our partners: Punchout Catalog Feature Integration Guide Eco: Punchout Catalogs Feature Integration\n Eco: Punchout Catalogs + Product Bundles Feature Integration",t:"Feature Partners"},"741":{i:0.00208913085069355,u:"../industry_partners/feature_partners/punchout-catalog-feature-integration-201907.htm",a:"Punchout Catalog Feature Integration Install Feature Core Prerequisites To start feature integration, overview, and install the necessary features:",t:"Punchout Catalog Feature Integration"},"742":{i:0.00208913085069355,u:"../industry_partners/feature_partners/eco-punchout-catalogs-feature-integration-201907.htm",a:"Eco: Punchout Catalogs Feature Integration Install Feature Core Prerequisites To start feature integration, overview and install the necessary features and packages:",t:"Eco: Punchout Catalogs Feature Integration"},"743":{i:0.00208913085069355,u:"../industry_partners/feature_partners/eco-punchout-catalogs-product-bundles-feature-integration-201907.htm",a:"Eco: Punchout Catalogs + Product Bundles Feature Integration Install Feature Core Prerequisites To start feature integration, overview and install the necessary features and packages:",t:"Eco: Punchout Catalogs + Product Bundles Feature Integration"},"744":{i:0.000244192040663408,u:"../about-migration-integration.htm",a:" This section of the documentation is dedicated to content describing all the migration and integration tasks you can possibly have. Module migration guides  explain how to update a module that has structural changes, such as to the database.  Feature integration guides  will guide you through the ...",t:"Welcome to Migration and Integration Guides "},"745":{i:0.000244192040663408,u:"../migration_concepts/migration_concepts/about-migration-concepts.htm",a:"This section will help the developers to handle situations when a new feature requires an extensive migration effort for modules, or some technical solution used in Spryker needs to be replaced with a new one. Here you will find instructions on how implement these changes in your project. The ...",t:"About Migration Concepts"},"746":{i:0.00190706635773636,u:"../migration_concepts/migration_concepts/silex_replacement/silex-replacement-201903.htm",a:"Silex is going to be replaced with a Spryker Application. The article is a part of a series of articles about Silex replacement in Spryker. It contains information about the reasons why it is going to be replaced, backward compatibility information, steps to be taken, changes in the old procedure and the new procedure. ",t:"Silex Replacement | Spryker"},});