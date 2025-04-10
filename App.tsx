apply plugin: "com.android.application"
apply plugin: "org.jetbrains.kotlin.android"
apply plugin: "com.facebook.react"
apply plugin: "com.google.gms.google-services" // Firebase Plugin

react {
  autolinkLibrariesWithApp()
}

def enableProguardInReleaseBuilds = false
def jscFlavor = 'org.webkit:android-jsc:+'

android {
    ndkVersion rootProject.ext.ndkVersion
    buildToolsVersion rootProject.ext.buildToolsVersion
    compileSdk rootProject.ext.compileSdkVersion

  namespace "com.nativesandbox"
    defaultConfig {
        applicationId "com.nativesandbox"
        minSdkVersion rootProject.ext.minSdkVersion
        targetSdkVersion rootProject.ext.targetSdkVersion
        versionCode 1
        versionName "1.0"
  }
    signingConfigs {
        debug {
            storeFile file('debug.keystore')
            storePassword 'android'
            keyAlias 'androiddebugkey'
            keyPassword 'android'
    }
  }
    buildTypes {
        debug {
            signingConfig signingConfigs.debug
    }
        release {
            signingConfig signingConfigs.debug
            minifyEnabled enableProguardInReleaseBuilds
            proguardFiles getDefaultProguardFile("proguard-android.txt"), "proguard-rules.pro"
    }
  }
}

dependencies {
  implementation("com.facebook.react:react-android")

  if (hermesEnabled.toBoolean()) {
    implementation("com.facebook.react:hermes-android")
  } else {
        implementation jscFlavor
  }

  // Firebase Core SDK
  implementation("com.google.firebase:firebase-bom:32.7.2")
  implementation("com.google.firebase:firebase-analytics")

  // Flipper - Apenas no debug
  debugImplementation("com.facebook.flipper:flipper:0.231.0")
  debugImplementation("com.facebook.flipper:flipper-network-plugin:0.231.0") {
        exclude group: 'com.squareup.okhttp3', module: 'okhttp'
  }
  debugImplementation("com.facebook.flipper:flipper-fresco-plugin:0.231.0")
}
