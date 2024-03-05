$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/amazon.feature");
formatter.feature({
  "name": "to check the amazon sign in using cucumber framework",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Feature2"
    }
  ]
});
formatter.scenario({
  "name": "to validate the amazon signin option",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature2"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "to launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "AmazonSignIn.to_launch_the_browser()"
});
formatter.result({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 114\nCurrent browser version is 122.0.6261.95 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027GILBERT\u0027, ip: \u0027192.168.254.173\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.9\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tGetHandleVerifier [0x00F9A813+48355]\n\t(No symbol) [0x00F2C4B1]\n\t(No symbol) [0x00E35358]\n\t(No symbol) [0x00E561AC]\n\t(No symbol) [0x00E51EF3]\n\t(No symbol) [0x00E50579]\n\t(No symbol) [0x00E80C55]\n\t(No symbol) [0x00E8093C]\n\t(No symbol) [0x00E7A536]\n\t(No symbol) [0x00E582DC]\n\t(No symbol) [0x00E593DD]\n\tGetHandleVerifier [0x011FAABD+2539405]\n\tGetHandleVerifier [0x0123A78F+2800735]\n\tGetHandleVerifier [0x0123456C+2775612]\n\tGetHandleVerifier [0x010251E0+616112]\n\t(No symbol) [0x00F35F8C]\n\t(No symbol) [0x00F32328]\n\t(No symbol) [0x00F3240B]\n\t(No symbol) [0x00F24FF7]\n\tBaseThreadInitThunk [0x77127BA9+25]\n\tRtlInitializeExceptionChain [0x77C6BD2B+107]\n\tRtlClearBits [0x77C6BCAF+191]\n\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:197)\r\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:1002)\r\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:129)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:527)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:513)\r\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:499)\r\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\r\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:647)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat org.base.BaseClass.launchBrowser(BaseClass.java:35)\r\n\tat org.sd.AmazonSignIn.to_launch_the_browser(AmazonSignIn.java:21)\r\n\tat ✽.to launch the browser(src/test/resources/amazon.feature:9)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "to launch the amazon Url",
  "keyword": "When "
});
formatter.match({
  "location": "AmazonSignIn.to_launch_the_amazon_Url()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "to click the signin option",
  "keyword": "When "
});
formatter.match({
  "location": "AmazonSignIn.to_click_the_signin_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "to pass the valid email or mobile number",
  "rows": [
    {
      "cells": [
        "email1",
        "email2",
        "email3"
      ]
    },
    {
      "cells": [
        "abc@gmail.com",
        "mno@gmail.com",
        "ghf@gmail.com"
      ]
    },
    {
      "cells": [
        "shd@gmail.com",
        "jdl@gmail.com",
        "als@gmail.com"
      ]
    },
    {
      "cells": [
        "ass@gmail.com",
        "adf@gmail.com",
        "asw@gmail.com"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "AmazonSignIn.to_pass_the_valid_email_or_mobile_number(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("src/test/resources/myntra.feature");
formatter.feature({
  "name": "to check the myntra application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Feature1"
    }
  ]
});
formatter.scenario({
  "name": "",
  "description": "to chech the profile page in signin option",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "to launch Gilber",
  "keyword": "Given "
});
formatter.match({
  "location": "Myntra.to_launch_Gilber()"
});
formatter.result({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 114\nCurrent browser version is 122.0.6261.95 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027GILBERT\u0027, ip: \u0027192.168.254.173\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.9\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tGetHandleVerifier [0x00F9A813+48355]\n\t(No symbol) [0x00F2C4B1]\n\t(No symbol) [0x00E35358]\n\t(No symbol) [0x00E561AC]\n\t(No symbol) [0x00E51EF3]\n\t(No symbol) [0x00E50579]\n\t(No symbol) [0x00E80C55]\n\t(No symbol) [0x00E8093C]\n\t(No symbol) [0x00E7A536]\n\t(No symbol) [0x00E582DC]\n\t(No symbol) [0x00E593DD]\n\tGetHandleVerifier [0x011FAABD+2539405]\n\tGetHandleVerifier [0x0123A78F+2800735]\n\tGetHandleVerifier [0x0123456C+2775612]\n\tGetHandleVerifier [0x010251E0+616112]\n\t(No symbol) [0x00F35F8C]\n\t(No symbol) [0x00F32328]\n\t(No symbol) [0x00F3240B]\n\t(No symbol) [0x00F24FF7]\n\tBaseThreadInitThunk [0x77127BA9+25]\n\tRtlInitializeExceptionChain [0x77C6BD2B+107]\n\tRtlClearBits [0x77C6BCAF+191]\n\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:197)\r\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:1002)\r\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:129)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:527)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:513)\r\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:499)\r\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\r\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:647)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat org.base.BaseClass.launchBrowser(BaseClass.java:35)\r\n\tat org.sd.Myntra.to_launch_Gilber(Myntra.java:20)\r\n\tat ✽.to launch Gilber(src/test/resources/myntra.feature:10)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "to launch the Url",
  "keyword": "When "
});
formatter.match({
  "location": "Myntra.to_launch_the_Url()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "to pass the product in search bar",
  "rows": [
    {
      "cells": [
        "brown loafer",
        "sadnjmajhsdf",
        "asdfnasdf"
      ]
    },
    {
      "cells": [
        "gjwskldgf",
        "zfsdfgdfg",
        "fgdgfh"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Myntra.to_pass_the_product_in_search_bar(DataTable)"
});
formatter.result({
  "status": "skipped"
});
});