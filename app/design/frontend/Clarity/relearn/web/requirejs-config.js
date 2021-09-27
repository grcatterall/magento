/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    deps: [
        "js/main",
    ],
    paths: {
        'bootstrap':'Magento_Theme/js/bootstrap.bundle.min',
    } ,
    shim: {
        'bootstrap': {
            'deps': ['jquery']
        }
    }
};