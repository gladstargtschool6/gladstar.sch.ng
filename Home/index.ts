import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as key from 'api-5244432553974148442-338861-2f09cd36081c.json'; // JSON key file
import { google } from 'googleapis';
import { CallableContext } from 'firebase-functions/lib/providers/https';

admin.initializeApp()

const authClient = new google.auth.JWT({
    email: "gladstargtschool@api-5244432553974148442-338861.iam.gserviceaccount.com",
    key: "nMIIEuwIBADANBgkqhkiG9w0BAQEFAASCBKUwggShAgEAAoIBAQCaO9AcQt7FfrHj\n1BGWuaE524eb1GtXP2HyK6eps1XCHhBX3w2IZ/Eh0ClgeZ2KFK/nLWcMQsAot+IR\nEs2isa98v7a1FiNOlCtqg7BqydB5WvIDC4RaLO8+1s42XJ8o9RbeI8T6+dw6Xx2B\nd2UNUUmQ+mRBbCqill6oKCzA4f+eb7BRt7ZFPWsw17Osk2l2GMRZG67J/IaNtQkn\n4W7haF4eV7aOpQT2PiqUdG0udqNyevYc/Wd05QGy2A0TrsiVmXNnXqZCfmGEbwPz\ngi7vszDFPRLipHqHz8vgkfcHgCpSPEianRf2OJrQuEDdkpPQA2uxW7MT33PxZhx1\nP2o8hlSVAgMBAAECgf8b626LNDE0pwSK+cbh1C/27CdkKhpimI2GC0dVfHKDXWCO\n1KzKDUusINb5j9fogXQA9rgC4PuPGu7CYG9VDtY2kJlqKfXO49PqaLynaV3qvNTT\nPkAv6mF60wsVCaUsCxSYqarW8OzfpDKZA9Lr3G/icZmmtXY8JzujTBRGGVcIYYnD\nPWu9K+4FnFonmzncJNDjCUWPeoL5whW4QNuZLed8RlFemHXaajBXC1fU3RiUiAeP\n9cgJpJJumUXGpnZQjVGyfE0om67KGCi5Kv9Sc2KBdfcxRzxP+/K6lsHFN57N8Pmk\n336JHk4MNus9kg2S3//HaVIH8/YydYnkf72BnVECgYEA13yGjEXcztjRuiI/ymQJ\npabl8D13CivfzL8FkwRDDCGjYAN5EkNU99u3HztITCbxhCP1l0+bOp+DWmD23XAa\niccCx+XQ/70CvqKQyVxNI2OTw1YZplnBdhakfLyLFMQvTrx1qP89Oozgcm00tnV6\nDAsWoJlkMzNAw/gyjY3VK/kCgYEAtzsoqoFbQOEexD0CpWoaylGSjO5xtCnan8SN\n01t9iw9ySzk74E0T6Vyo/4lHX0mYgqvCmu031lLJRuhn8FmFLDjOb+9J7Fa3fLQB\ngKXDOa+2mzpaY+FEPtyr11Op0MeLiQh7nCrPGBakXPU7PzqAmxG93ZMd2SS4Rg/2\nw6+NvH0CgYAAmTHudcs1L9j1QV8X+sskEKCW2DTabGDEussTK3HcOMOxYpEVgeZc\ngdmyVoHO5FTLXyYxc2Ek+ohs2dQVrVgFhe32DCdWbnnxeZYZWQ5FyOMCKd0MXzdw\nUoPGbOed+SWAfHl/LKZI4VdGOhNpZk4ednFrpMFoev31DV1mkzxCUQKBgQCnMyGh\nrVay9npXwgCXJyJ5OkSLu84gBA1Ou1Jb6uG9soOuJvT/cfZYfUhtnjx1tDeqDcgQ\nDaVlOrgWr16hUV8XgmLGe8muE1duQOgaF6j1C+WK8o2nFNlsr3tTizGrpVsr2YTK\ndbnylj634MOGqADRADiMZ4HWMw7ASDL6UEj7FQKBgE3rHiND8DQGpPAgtJcbMIiA\n6AyT9upux0YvSwFdOAuY3m4P7sqyfjHYmZr13mRZiPtJ5vRtYjpau0Ubwre0FWH2\nTgZP4m87QjTLP2hEEbL64eFQA0yY3B548Ym4cHyV8KGwBPaPNCziFo/4tNWINdrB\n1USHOuQr3ZfaRymiADBx\n",
    scopes: ["https://www.googleapis.com/auth/androidpublisher"]
});
const playDeveloperApiClient = google.androidpublisher({
    version: 'v3',
    auth: authClient
});
export const verifySubscription = functions.https.onCall(async (data, context: CallableContext) => {
    const skuId: string = data.sku_id;
    const purchaseToken: string = data.purchase_token;
    const packageName: string = data.package_name;
 try {
        await authClient.authorize();
        const subscription = await playDeveloperApiClient.purchases.subscriptions.get({
            packageName: packageName,
            subscriptionId: skuId,
            token: purchaseToken
        });

        if (subscription.status === 200) {
            // Subscription response is successful. subscription.data will return the subscription information.
            return {
                status: 200,
                message: "Subscription verification successfuly!"
            }
        }
    } catch (error) {
		  // Logging error for debugging
        console.log(error)
    }

    // This message is returned when there is no successful response from the subscription/purchase get call
    return {
        status: 500,
        message: "Failed to verify subscription, Try again!"
    }
});
 const firebaseFunctions = FirebaseFunctions.getInstance()
private fun verifySubscription(purchase: PurchaseInfo) {
    // Place check to see if skuId and purchaseToken are not empty?
     const data = mapOf(
        "sku_id" to purchase.skuId,
        "purchase_token" to purchase.purchaseToken,
        "package_name" to packageName, // Provide your app package name
    )
   // Passing the name of cloud function in getHttpsCallable()
    firebaseFunctions.getHttpsCallable("verifySubscription").call(data).continueWith {
        // Make sure you provide proper checks, don't do it like this 😂
        try {
            // Converting the string response in json using Gson
             const subJson = Gson().toJson(it.result?.data)
        } catch (e: Exception) {
            e.printStackTrace()
        }
    }
}