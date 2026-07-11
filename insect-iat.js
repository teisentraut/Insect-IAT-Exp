define([
    'pipAPI',
    'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/iat10.js'
], function(APIConstructor, iatExtension){

    var API = new APIConstructor();
    var global = API.getGlobal();

    return iatExtension({

        category1 : {
            name : 'Insects',
            title : {
                media : {word : 'Insects'},
                css : {
                    color : '#31940F',
                    'font-size' : '1.8em'
                },
                height : 4
            },

            stimulusMedia : [
                {image : 'ins_1.jpg'},
                {image : 'ins_2.jpg'},
                {image : 'ins_3.jpg'},
                {image : 'ins_4.jpg'},
                {image : 'ins_5.jpg'},
                {image : 'ins_6.jpg'}
            ],

            stimulusCss : {
                color : '#31940F',
                'font-size' : '2.3em'
            }
        },

        category2 : {
            name : 'Mammals',
            title : {
                media : {word : 'Mammals'},
                css : {
                    color : '#31940F',
                    'font-size' : '1.8em'
                },
                height : 4
            },

            stimulusMedia : [
                {image : 'mam_1.jpg'},
                {image : 'mam_2.jpg'},
                {image : 'mam_3.jpg'},
                {image : 'mam_4.jpg'},
                {image : 'mam_5.jpg'},
                {image : 'mam_6.jpg'}
            ],

            stimulusCss : {
                color : '#31940F',
                'font-size' : '2.3em'
            }
        },

        attribute1 : {
            name : 'Bad words',
            title : {
                media : {word : 'Bad words'},
                css : {
                    color : '#0000FF',
                    'font-size' : '1.8em'
                },
                height : 4
            },

            stimulusMedia : [
                {word : global.negWords[0]},
                {word : global.negWords[1]},
                {word : global.negWords[2]},
                {word : global.negWords[3]},
                {word : global.negWords[4]},
                {word : global.negWords[5]},
                {word : global.negWords[6]},
                {word : global.negWords[7]}
            ],

            stimulusCss : {
                color : '#0000FF',
                'font-size' : '2.3em'
            }
        },

        attribute2 : {
            name : 'Good words',
            title : {
                media : {word : 'Good words'},
                css : {
                    color : '#0000FF',
                    'font-size' : '1.8em'
                },
                height : 4
            },

            stimulusMedia : [
                {word : global.posWords[0]},
                {word : global.posWords[1]},
                {word : global.posWords[2]},
                {word : global.posWords[3]},
                {word : global.posWords[4]},
                {word : global.posWords[5]},
                {word : global.posWords[6]},
                {word : global.posWords[7]}
            ],

            stimulusCss : {
                color : '#0000FF',
                'font-size' : '2.3em'
            }
        },

        base_url : {
            image : global.baseURL
        },

        isTouch : global.$isTouch
    });
});
