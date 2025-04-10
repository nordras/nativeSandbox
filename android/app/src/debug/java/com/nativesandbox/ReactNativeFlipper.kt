package com.nativesandbox

import android.content.Context
import com.facebook.flipper.android.AndroidFlipperClient
import com.facebook.flipper.plugins.network.FlipperOkhttpInterceptor
import com.facebook.flipper.plugins.network.NetworkFlipperPlugin
import com.facebook.flipper.plugins.sharedpreferences.SharedPreferencesFlipperPlugin
import com.facebook.react.ReactInstanceManager
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.modules.network.NetworkingModule

object ReactNativeFlipper {
    @JvmStatic
    fun initializeFlipper(context: Context, reactInstanceManager: ReactInstanceManager) {
        val client = AndroidFlipperClient.getInstance(context)
        val networkPlugin = NetworkFlipperPlugin()

        client.addPlugin(networkPlugin)
        client.addPlugin(SharedPreferencesFlipperPlugin(context))

        client.start()

        NetworkingModule.setCustomClientBuilder { builder ->
            builder.addNetworkInterceptor(FlipperOkhttpInterceptor(networkPlugin))
        }
    }
}
