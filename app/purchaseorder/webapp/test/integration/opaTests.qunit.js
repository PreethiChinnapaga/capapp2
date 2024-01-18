sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'preethi/po/purchaseorder/test/integration/FirstJourney',
		'preethi/po/purchaseorder/test/integration/pages/POsList',
		'preethi/po/purchaseorder/test/integration/pages/POsObjectPage',
		'preethi/po/purchaseorder/test/integration/pages/PurchaseOrderItemSetObjectPage'
    ],
    function(JourneyRunner, opaJourney, POsList, POsObjectPage, PurchaseOrderItemSetObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('preethi/po/purchaseorder') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePOsList: POsList,
					onThePOsObjectPage: POsObjectPage,
					onThePurchaseOrderItemSetObjectPage: PurchaseOrderItemSetObjectPage
                }
            },
            opaJourney.run
        );
    }
);