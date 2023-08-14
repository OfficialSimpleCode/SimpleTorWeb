'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "42b7cf7c3384be76d5ab54c0c8dc2abd",
"assets/AssetManifest.smcbin": "d1cb8f73a32fb6c4f5cc7dfda242fb72",
"assets/assets/animations/attention.json.zip": "cb2e40b4fdd9aa4262084b002b6e3eab",
"assets/assets/animations/changing_images.json.zip": "b2f460f705f26e0e8f2c41e60bcfc3b8",
"assets/assets/animations/clock_animation.json.zip": "e968799bf859f06ade72c8be842db97b",
"assets/assets/animations/createBusinessAnimation.json.zip": "55a46f7799cf5fd8a95296887f25d4d5",
"assets/assets/animations/credit_card_animation.json.zip": "927e8b35b97a63784201096f4f93930d",
"assets/assets/animations/cuntact_us_animation.json.zip": "fb8a50758df73214ece1c1e29bef4632",
"assets/assets/animations/delete_animation.json.zip": "725e9a7a5beb09e8f60c51361382c40c",
"assets/assets/animations/empty_animation.json.zip": "c9f01da447366593072eeccc6b15dbdb",
"assets/assets/animations/landing_page_animation.json.zip": "a96bbbf3d99b6a73952db7f30aa13943",
"assets/assets/animations/loading_animation.json.zip": "967b6d8eec52c050586c9736dfea862b",
"assets/assets/animations/maintenance_animation.json.zip": "41371535939f053ddb21d55a2b106049",
"assets/assets/animations/money_animation.json.zip": "2f7d932709f00e100a735d282115c499",
"assets/assets/animations/money_saving.json.zip": "8cb588fa25f2cc670f6cafc84d755ed7",
"assets/assets/animations/most_popular_animation.json.zip": "7bccbc4a05480746cd6873541f744264",
"assets/assets/animations/network_issue_animation.json.zip": "e7f70b39bbc3939dff4cbf97d7336b43",
"assets/assets/animations/notification.json.zip": "534dc861e639203c1ccca4d14f3b5e95",
"assets/assets/animations/no_access.json.zip": "e6eca92b89021b06c8e2f0bcab45e019",
"assets/assets/animations/no_terminal_animation.json.zip": "95d84ed7d19be69f37d1726930c03698",
"assets/assets/animations/payments_path_animation.json.zip": "26651a046d74b6d7b4659a79851cbf79",
"assets/assets/animations/pos_animation.json.zip": "798752c3a01b10d1a04735859ed7035b",
"assets/assets/animations/products.json.zip": "411673da7177610584c5fdfbad05767b",
"assets/assets/animations/rest_animation.json.zip": "8d2b4d8246658a8f8b9c40255fd0a6a6",
"assets/assets/animations/rocket.json.zip": "b62abf6b3ceb1747521abbe0bb60969d",
"assets/assets/animations/securityAnimation.json.zip": "1cd6e379fb959de3b240a1333fb4cf3d",
"assets/assets/animations/send_sms_animation.json.zip": "8845e44f8a539413db9574de706f6126",
"assets/assets/animations/share.json.zip": "59848e58f5e03adf7bfdbebd2f81fbe8",
"assets/assets/animations/story.json.zip": "34c7badf727340a903e8d158eb4b9c2f",
"assets/assets/animations/subscription_animation.json.zip": "ef6661a6b34325175c74b14c2b33398a",
"assets/assets/animations/success_animation.json.zip": "b2f20b7de38c629a0a14cc293011593b",
"assets/assets/animations/support_animation.json.zip": "2bb2fdaa77f42c44c97bd1de0a3087d5",
"assets/assets/animations/times_issue_animation.json.zip": "3d4fc9f3396983d4d5082b32ba9d1009",
"assets/assets/animations/time_order.json.zip": "1187039d0e865e656c4b157ce639410c",
"assets/assets/animations/time_red.json.zip": "7f276d7568d06bf25392195c35885070",
"assets/assets/animations/unknown_issue_animation.json.zip": "f9feb11d5d763606fc978b626cf75ccb",
"assets/assets/animations/vacationAnimation.json.zip": "07356096bed97d64ee5c4660a457ab0f",
"assets/assets/animations/watch_web_animation.json.zip": "e76c4d73004dcba4d3aa9cc367d64f09",
"assets/assets/animations/workers_animation.json.zip": "534d96bd0ca3e808ca96584b87fe27ba",
"assets/assets/app_icon.png": "dbeed262e5f09265f47c7121c9fd829d",
"assets/assets/attention_image.webp": "1d48019e6ece0d50b938d6026d6e4392",
"assets/assets/booking_image.webp": "092e81fce05e3350163757b6e85b54b5",
"assets/assets/box.webp": "72e38c4591ea3d014491d7b15a1cb08d",
"assets/assets/break_image.webp": "e820e6cd1f6d6a2aafaf5b046a13278e",
"assets/assets/card.webp": "f11834eca69d4f2af9dbe6e11b3ec427",
"assets/assets/card_light.webp": "d9cc76c82703ccb157859873e8d3fe8f",
"assets/assets/clock_image.webp": "4aa22e14be00c8000d6a93a73da16885",
"assets/assets/day.webp": "71366fd275a13cca4008cea23edcd69c",
"assets/assets/default_icon_dark.webp": "228b79a4b8fccea0fdb306dccc10687d",
"assets/assets/default_icon_light.webp": "6cf42d0419930e9f16ba4f11349e6cc8",
"assets/assets/default_photo.webp": "54af21a70b89ee81bdadc5ac5286557b",
"assets/assets/default_photo_light.webp": "c8f2f9faaa9713a2cbb6124486b8bb9e",
"assets/assets/icons/barber.webp": "11e9a1f95ad8019d21ae26afeae26743",
"assets/assets/icons/book.webp": "50dc5a3aa7779808a70887c982aac7b5",
"assets/assets/icons/bueaty-salon.webp": "ea36f01a61e0d48a1274f42856025f97",
"assets/assets/icons/car-wash.webp": "ae53cfedc39c331664db2928ab386706",
"assets/assets/icons/chef.webp": "d22709934cbce301faba77cffecb61cd",
"assets/assets/icons/clown.webp": "9d0f695d38219b7e0ee7fc6a52895a45",
"assets/assets/icons/coach.webp": "e27ce688ede41fa10c913f0566d0003f",
"assets/assets/icons/cobbler.webp": "24d4e4980946d283fe10e80c007b1dd4",
"assets/assets/icons/communication.webp": "59df4c5e2467509d553653422a4e31dc",
"assets/assets/icons/dancing.webp": "e770b5440b58068726263e97a09f623c",
"assets/assets/icons/delete.webp": "e21e2d96d4f307d8a444d3c52d7cf4e4",
"assets/assets/icons/diet.webp": "d71fbd5bbdfe3f33d18a946fe5cda092",
"assets/assets/icons/discussion.webp": "3aa2db75a7272d332f49fd1ed6b21fb8",
"assets/assets/icons/dj.webp": "92839f56cff9f54ea6db12789e9658c5",
"assets/assets/icons/eye.webp": "e05658f3416c21eb72bd4be2b1338b4a",
"assets/assets/icons/financial-profit.webp": "d71acd3be4ef23f491697dd7151dc2c9",
"assets/assets/icons/finger-with-nail.webp": "36c95b656f49d712b61f8e6a13ed31fe",
"assets/assets/icons/fitness.webp": "2cc1c1b019c5f687b0f0d801ce48d889",
"assets/assets/icons/groomer.webp": "5da1cc6757c9faed0f28656b247988f8",
"assets/assets/icons/hair-removal.webp": "d65b4eebb61bd41536cf04ec67b50313",
"assets/assets/icons/hairdresser.webp": "a6f94902cd3e2657f84d2b2089be69d1",
"assets/assets/icons/hat.webp": "a47db7e84fea9307cb607eceb77c7ec0",
"assets/assets/icons/knee.webp": "27cb57c0265ee27a4080e55c93ce50f4",
"assets/assets/icons/lawyer.webp": "ae6ac8801d145a910793b6bccc2316e5",
"assets/assets/icons/leadership.webp": "86541cc562a88522961544b8395330ff",
"assets/assets/icons/liner.webp": "c3c7a5c7d7710ecff495a3b416dedcd7",
"assets/assets/icons/make-up.webp": "70ffaa3c35cd7092919669fde9207f23",
"assets/assets/icons/masseur.webp": "cd9705d95622932e236e65d41df4f523",
"assets/assets/icons/more-information.webp": "4fd7a500e4951393d6f725e415227e9d",
"assets/assets/icons/mother.webp": "73680753028883a05548c4ba4b3e5d11",
"assets/assets/icons/nail-dryer.webp": "0ab7ad604e3688be6436d32af4460690",
"assets/assets/icons/nail-polish.webp": "be38cb7f1183274dc3db6cb90b1fcefc",
"assets/assets/icons/photographer.webp": "8ba1721a2c62cb98f280f84210380a52",
"assets/assets/icons/physical-therapy.webp": "6a192f12817ad9bcbddb4babd124afc1",
"assets/assets/icons/psychologist.webp": "ac7c12a94b4884e461c28d8762f51091",
"assets/assets/icons/real-estate.webp": "95cf8422b4a00ccc4a1b55644a957599",
"assets/assets/icons/restaurant.webp": "6929c084d18b908ce11490521a0bbf43",
"assets/assets/icons/sales.webp": "2d87f22439992a1f79f606ba7006baf9",
"assets/assets/icons/social-care.webp": "ffa1073110703e2bd8f27b6599774806",
"assets/assets/icons/steering-wheel.webp": "826bbbb51336a503b4d81675cd1f1d47",
"assets/assets/icons/stethoscope.webp": "46b810fa9d6086285a4cc4f8ae158d9a",
"assets/assets/icons/suit.webp": "3cd717049b6a9b51a4ed89b4f12633cc",
"assets/assets/icons/swimming.webp": "f8b636cf433db401d799eb6d26d85288",
"assets/assets/icons/tattoo.webp": "2bc206d492a2a88a3e9dc2d393b2f4f0",
"assets/assets/icons/teacher.webp": "ba2bce02d137fa76c1801d3bf4d5d992",
"assets/assets/icons/tooth.webp": "5b330254272ae0b51a8755b8842a8599",
"assets/assets/icons/veterinarian.webp": "afa2218359e3c16bf3a93f9158d9c820",
"assets/assets/icons/washer.webp": "cfcbe13c90e5ddc58d242393d9cf9b79",
"assets/assets/icons/wedding-dress.webp": "f43322797bc6045c190b5b5d4d7458c0",
"assets/assets/icons/wig.webp": "ff46101b9a6063e807eaed36d0bbefeb",
"assets/assets/israel.webp": "1e127091d362c8b021c83a004d01fca8",
"assets/assets/launch_icon.webp": "0bc0812966cc9c6cf137a1d891b3f0ba",
"assets/assets/logoDark.webp": "579bd610845d1cd746f73809f80e9dd1",
"assets/assets/man_profile.webp": "6ac1cdf5d05a8138b284c2b8ebbcedde",
"assets/assets/meditation.webp": "f60d2315f51e7ffb811f8ae509458392",
"assets/assets/message.webp": "2adbb5d27159be76c028d902afa31376",
"assets/assets/month.webp": "6b5f3836e57e4f3f13bdafcde45f2888",
"assets/assets/multiple.webp": "d99dd3c7e94d706f007edc63a3de8969",
"assets/assets/people.webp": "11fc326fd8f9de6f0808d80f8ae37539",
"assets/assets/shifts_image.webp": "59a59d1e1aa25f550701ca33d796ff1e",
"assets/assets/store_icon.webp": "acc2c9631c4cb014fb4b3fa18f2f5c56",
"assets/assets/success_image.webp": "39038129dd4f7b5c417a5acae4762f30",
"assets/assets/sunset.webp": "aa88c56c62e978a5d18a45deb111d0af",
"assets/assets/usa.webp": "6cb3971d59103b6a253fbc977ce2e482",
"assets/assets/vacation_image.webp": "5abd47df5d9c5f14dd6bd9ce89281b08",
"assets/assets/week.webp": "4429084c6e869ae29390e2e20d37729d",
"assets/assets/woman_profile.webp": "87037456ea14492670c995d5a3daf60c",
"assets/assets/workers.webp": "8c2707cb240e1c6008479acf5c64afb5",
"assets/FontManifest.json": "0899d45f07a484fe08d00885370e76bb",
"assets/fonts/MaterialIcons-Regular.otf": "6d5a102f8f3d7a6fd31af4b89398095b",
"assets/NOTICES": "98d69064603fe03287253cc33d6293b3",
"assets/packages/currency_picker/lib/src/res/no_flag.png": "3f454777dfe9b6aae5e9d8544f4fa6f6",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/flutter_credit_card/font/halter.ttf": "4e081134892cd40793ffe67fdc3bed4e",
"assets/packages/flutter_credit_card/icons/amex.png": "f75cabd609ccde52dfc6eef7b515c547",
"assets/packages/flutter_credit_card/icons/chip.png": "5728d5ac34dbb1feac78ebfded493d69",
"assets/packages/flutter_credit_card/icons/discover.png": "62ea19837dd4902e0ae26249afe36f94",
"assets/packages/flutter_credit_card/icons/elo.png": "ffd639816704b9f20b73815590c67791",
"assets/packages/flutter_credit_card/icons/hipercard.png": "921660ec64a89da50a7c82e89d56bac9",
"assets/packages/flutter_credit_card/icons/mastercard.png": "7e386dc6c169e7164bd6f88bffb733c7",
"assets/packages/flutter_credit_card/icons/visa.png": "f6301ad368219611958eff9bb815abfe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "7d8d4306237845212974af924b1ab33d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "c2281cf0a22c29917ebf755ba9d11e50",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "8e0542a7d7eec9dbada78c8605db3ccd",
"assets/packages/getwidget/icons/dribble.png": "1e36936e4411f32b0e28fd8335495647",
"assets/packages/getwidget/icons/facebook.png": "293dc099a89c74ae34a028b1ecd2c1f0",
"assets/packages/getwidget/icons/google.png": "596c5544c21e9d6cb02b0768f60f589a",
"assets/packages/getwidget/icons/line.png": "da8d1b531d8189396d68dfcd8cb37a79",
"assets/packages/getwidget/icons/linkedin.png": "822742104a63a720313f6a14d3134f61",
"assets/packages/getwidget/icons/pinterest.png": "d52ccb1e2a8277e4c37b27b234c9f931",
"assets/packages/getwidget/icons/slack.png": "19155b848beeb39c1ffcf743608e2fde",
"assets/packages/getwidget/icons/twitter.png": "caee56343a870ebd76a090642d838139",
"assets/packages/getwidget/icons/wechat.png": "ba10e8b2421bde565e50dfabc202feb7",
"assets/packages/getwidget/icons/whatsapp.png": "30632e569686a4b84cc68169fb9ce2e1",
"assets/packages/getwidget/icons/youtube.png": "1bfda73ab724ad40eb8601f1e7dbc1b9",
"assets/packages/intl_phone_field/assets/flags/ad.png": "384e9845debe9aca8f8586d9bedcb7e6",
"assets/packages/intl_phone_field/assets/flags/ae.png": "792efc5eb6c31d780bd34bf4bad69f3f",
"assets/packages/intl_phone_field/assets/flags/af.png": "ba710b50a060b5351381b55366396c30",
"assets/packages/intl_phone_field/assets/flags/ag.png": "41c11d5668c93ba6e452f811defdbb24",
"assets/packages/intl_phone_field/assets/flags/ai.png": "ce5e91ed1725f0499b9231b69a7fd448",
"assets/packages/intl_phone_field/assets/flags/al.png": "722cf9e5c7a1d9c9e4608fb44dbb427d",
"assets/packages/intl_phone_field/assets/flags/am.png": "aaa39141fbc80205bebaa0200b55a13a",
"assets/packages/intl_phone_field/assets/flags/an.png": "4e4b90fbca1275d1839ca5b44fc51071",
"assets/packages/intl_phone_field/assets/flags/ao.png": "5f0a372aa3aa7150a3dafea97acfc10d",
"assets/packages/intl_phone_field/assets/flags/aq.png": "0c586e7b91aa192758fdd0f03adb84d8",
"assets/packages/intl_phone_field/assets/flags/ar.png": "3bd245f8c28f70c9ef9626dae27adc65",
"assets/packages/intl_phone_field/assets/flags/as.png": "d9c1da515c6f945c2e2554592a9dfaae",
"assets/packages/intl_phone_field/assets/flags/at.png": "570c070177a5ea0fe03e20107ebf5283",
"assets/packages/intl_phone_field/assets/flags/au.png": "72be14316f0af3903cdca7a726c0c589",
"assets/packages/intl_phone_field/assets/flags/aw.png": "a93ddf8e32d246dc47f6631f38e0ed92",
"assets/packages/intl_phone_field/assets/flags/ax.png": "ec2062c36f09ed8fb90ac8992d010024",
"assets/packages/intl_phone_field/assets/flags/az.png": "6ffa766f6883d2d3d350cdc22a062ca3",
"assets/packages/intl_phone_field/assets/flags/ba.png": "d415bad33b35de3f095177e8e86cbc82",
"assets/packages/intl_phone_field/assets/flags/bb.png": "a8473747387e4e7a8450c499529f1c93",
"assets/packages/intl_phone_field/assets/flags/bd.png": "86a0e4bd8787dc8542137a407e0f987f",
"assets/packages/intl_phone_field/assets/flags/be.png": "7e5e1831cdd91935b38415479a7110eb",
"assets/packages/intl_phone_field/assets/flags/bf.png": "63f1c67fca7ce8b52b3418a90af6ad37",
"assets/packages/intl_phone_field/assets/flags/bg.png": "1d24bc616e3389684ed2c9f18bcb0209",
"assets/packages/intl_phone_field/assets/flags/bh.png": "a1acd86ef0e19ea5f0297bbe1de6cfd4",
"assets/packages/intl_phone_field/assets/flags/bi.png": "adda8121501f0543f1075244a1acc275",
"assets/packages/intl_phone_field/assets/flags/bj.png": "6fdc6449f73d23ad3f07060f92db4423",
"assets/packages/intl_phone_field/assets/flags/bl.png": "dae94f5465d3390fdc5929e4f74d3f5f",
"assets/packages/intl_phone_field/assets/flags/bm.png": "b366ba84cbc8286c830f392bb9086be5",
"assets/packages/intl_phone_field/assets/flags/bn.png": "ed650de06fff61ff27ec92a872197948",
"assets/packages/intl_phone_field/assets/flags/bo.png": "3ccf6fa7f9cbc27949b8418925e4e89c",
"assets/packages/intl_phone_field/assets/flags/bq.png": "3649c177693bfee9c2fcc63c191a51f1",
"assets/packages/intl_phone_field/assets/flags/br.png": "5093e0cd8fd3c094664cd17ea8a36fd1",
"assets/packages/intl_phone_field/assets/flags/bs.png": "2b9540c4fa514f71911a48de0bd77e71",
"assets/packages/intl_phone_field/assets/flags/bt.png": "3cfe1440e952bc7266d71f7f1454fa23",
"assets/packages/intl_phone_field/assets/flags/bv.png": "33bc70259c4908b7b9adeef9436f7a9f",
"assets/packages/intl_phone_field/assets/flags/bw.png": "fac8b90d7404728c08686dc39bab4fb3",
"assets/packages/intl_phone_field/assets/flags/by.png": "beabf61e94fb3a4f7c7a7890488b213d",
"assets/packages/intl_phone_field/assets/flags/bz.png": "fd2d7d27a5ddabe4eb9a10b1d3a433e4",
"assets/packages/intl_phone_field/assets/flags/ca.png": "76f2fac1d3b2cc52ba6695c2e2941632",
"assets/packages/intl_phone_field/assets/flags/cc.png": "31a475216e12fef447382c97b42876ce",
"assets/packages/intl_phone_field/assets/flags/cd.png": "5b5f832ed6cd9f9240cb31229d8763dc",
"assets/packages/intl_phone_field/assets/flags/cf.png": "263583ffdf7a888ce4fba8487d1da0b2",
"assets/packages/intl_phone_field/assets/flags/cg.png": "eca97338cc1cb5b5e91bec72af57b3d4",
"assets/packages/intl_phone_field/assets/flags/ch.png": "a251702f7760b0aac141428ed60b7b66",
"assets/packages/intl_phone_field/assets/flags/ci.png": "7f5ca3779d5ff6ce0c803a6efa0d2da7",
"assets/packages/intl_phone_field/assets/flags/ck.png": "39f343868a8dc8ca95d27b27a5caf480",
"assets/packages/intl_phone_field/assets/flags/cl.png": "6735e0e2d88c119e9ed1533be5249ef1",
"assets/packages/intl_phone_field/assets/flags/cm.png": "42d52fa71e8b4dbb182ff431749e8d0d",
"assets/packages/intl_phone_field/assets/flags/cn.png": "040539c2cdb60ebd9dc8957cdc6a8ad0",
"assets/packages/intl_phone_field/assets/flags/co.png": "e3b1be16dcdae6cb72e9c238fdddce3c",
"assets/packages/intl_phone_field/assets/flags/cr.png": "bfd8b41e63fc3cc829c72c4b2e170532",
"assets/packages/intl_phone_field/assets/flags/cu.png": "f41715bd51f63a9aebf543788543b4c4",
"assets/packages/intl_phone_field/assets/flags/cv.png": "9b1f31f9fc0795d728328dedd33eb1c0",
"assets/packages/intl_phone_field/assets/flags/cw.png": "6c598eb0d331d6b238da57055ec00d33",
"assets/packages/intl_phone_field/assets/flags/cx.png": "8efa3231c8a3900a78f2b51d829f8c52",
"assets/packages/intl_phone_field/assets/flags/cy.png": "7b36f4af86257a3f15f5a5a16f4a2fcd",
"assets/packages/intl_phone_field/assets/flags/cz.png": "73ecd64c6144786c4d03729b1dd9b1f3",
"assets/packages/intl_phone_field/assets/flags/de.png": "5d9561246523cf6183928756fd605e25",
"assets/packages/intl_phone_field/assets/flags/dj.png": "078bd37d41f746c3cb2d84c1e9611c55",
"assets/packages/intl_phone_field/assets/flags/dk.png": "abcd01bdbcc02b4a29cbac237f29cd1d",
"assets/packages/intl_phone_field/assets/flags/dm.png": "8886b222ed9ccd00f67e8bcf86dadcc2",
"assets/packages/intl_phone_field/assets/flags/do.png": "ed35983a9263bb5713be37d9a52caddc",
"assets/packages/intl_phone_field/assets/flags/dz.png": "132ceca353a95c8214676b2e94ecd40f",
"assets/packages/intl_phone_field/assets/flags/ec.png": "c1ae60d080be91f3be31e92e0a2d9555",
"assets/packages/intl_phone_field/assets/flags/ee.png": "e242645cae28bd5291116ea211f9a566",
"assets/packages/intl_phone_field/assets/flags/eg.png": "311d780e8e3dd43f87e6070f6feb74c7",
"assets/packages/intl_phone_field/assets/flags/eh.png": "515a9cf2620c802e305b5412ac81aed2",
"assets/packages/intl_phone_field/assets/flags/er.png": "8ca78e10878a2e97c1371b38c5d258a7",
"assets/packages/intl_phone_field/assets/flags/es.png": "654965f9722f6706586476fb2f5d30dd",
"assets/packages/intl_phone_field/assets/flags/et.png": "57edff61c7fddf2761a19948acef1498",
"assets/packages/intl_phone_field/assets/flags/eu.png": "c58ece3931acb87faadc5b940d4f7755",
"assets/packages/intl_phone_field/assets/flags/fi.png": "3ccd69a842e55183415b7ea2c04b15c8",
"assets/packages/intl_phone_field/assets/flags/fj.png": "1c6a86752578eb132390febf12789cd6",
"assets/packages/intl_phone_field/assets/flags/fk.png": "da8b0fe48829aae2c8feb4839895de63",
"assets/packages/intl_phone_field/assets/flags/fm.png": "d571b8bc4b80980a81a5edbde788b6d2",
"assets/packages/intl_phone_field/assets/flags/fo.png": "2c7d9233582e83a86927e634897a2a90",
"assets/packages/intl_phone_field/assets/flags/fr.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/packages/intl_phone_field/assets/flags/ga.png": "b0e5b2fa1b7106c7652a955db24c11c4",
"assets/packages/intl_phone_field/assets/flags/gb-eng.png": "0d9f2a6775fd52b79e1d78eb1dda10cf",
"assets/packages/intl_phone_field/assets/flags/gb-nir.png": "98773db151c150cabe845183241bfe6b",
"assets/packages/intl_phone_field/assets/flags/gb-sct.png": "75106a5e49e3e16da76cb33bdac102ab",
"assets/packages/intl_phone_field/assets/flags/gb-wls.png": "d7d7c77c72cd425d993bdc50720f4d04",
"assets/packages/intl_phone_field/assets/flags/gb.png": "98773db151c150cabe845183241bfe6b",
"assets/packages/intl_phone_field/assets/flags/gd.png": "7a4864ccfa2a0564041c2d1f8a13a8c9",
"assets/packages/intl_phone_field/assets/flags/ge.png": "6fbd41f07921fa415347ebf6dff5b0f7",
"assets/packages/intl_phone_field/assets/flags/gf.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/packages/intl_phone_field/assets/flags/gg.png": "eed435d25bd755aa7f9cd7004b9ed49d",
"assets/packages/intl_phone_field/assets/flags/gh.png": "b35464dca793fa33e51bf890b5f3d92b",
"assets/packages/intl_phone_field/assets/flags/gi.png": "446aa44aaa063d240adab88243b460d3",
"assets/packages/intl_phone_field/assets/flags/gl.png": "b79e24ee1889b7446ba3d65564b86810",
"assets/packages/intl_phone_field/assets/flags/gm.png": "7148d3715527544c2e7d8d6f4a445bb6",
"assets/packages/intl_phone_field/assets/flags/gn.png": "b2287c03c88a72d968aa796a076ba056",
"assets/packages/intl_phone_field/assets/flags/gp.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/packages/intl_phone_field/assets/flags/gq.png": "4286e56f388a37f64b21eb56550c06d9",
"assets/packages/intl_phone_field/assets/flags/gr.png": "ec11281d7decbf07b81a23a72a609b59",
"assets/packages/intl_phone_field/assets/flags/gs.png": "419dd57836797a3f1bf6258ea6589f9a",
"assets/packages/intl_phone_field/assets/flags/gt.png": "706a0c3b5e0b589c843e2539e813839e",
"assets/packages/intl_phone_field/assets/flags/gu.png": "2acb614b442e55864411b6e418df6eab",
"assets/packages/intl_phone_field/assets/flags/gw.png": "05606b9a6393971bd87718b809e054f9",
"assets/packages/intl_phone_field/assets/flags/gy.png": "159a260bf0217128ea7475ba5b272b6a",
"assets/packages/intl_phone_field/assets/flags/hk.png": "4b5ec424348c98ec71a46ad3dce3931d",
"assets/packages/intl_phone_field/assets/flags/hm.png": "72be14316f0af3903cdca7a726c0c589",
"assets/packages/intl_phone_field/assets/flags/hn.png": "9ecf68aed83c4a9b3f1e6275d96bfb04",
"assets/packages/intl_phone_field/assets/flags/hr.png": "69711b2ea009a3e7c40045b538768d4e",
"assets/packages/intl_phone_field/assets/flags/ht.png": "630f7f8567d87409a32955107ad11a86",
"assets/packages/intl_phone_field/assets/flags/hu.png": "281582a753e643b46bdd894047db08bb",
"assets/packages/intl_phone_field/assets/flags/id.png": "80bb82d11d5bc144a21042e77972bca9",
"assets/packages/intl_phone_field/assets/flags/ie.png": "1d91912afc591dd120b47b56ea78cdbf",
"assets/packages/intl_phone_field/assets/flags/il.png": "1e06ad7783f24332405d36561024cc4c",
"assets/packages/intl_phone_field/assets/flags/im.png": "7c9ccb825f0fca557d795c4330cf4f50",
"assets/packages/intl_phone_field/assets/flags/in.png": "1dec13ba525529cffd4c7f8a35d51121",
"assets/packages/intl_phone_field/assets/flags/io.png": "83d45bbbff087d47b2b39f1c20598f52",
"assets/packages/intl_phone_field/assets/flags/iq.png": "bc3e6f68c5188dbf99b473e2bea066f2",
"assets/packages/intl_phone_field/assets/flags/ir.png": "37f67c3141e9843196cb94815be7bd37",
"assets/packages/intl_phone_field/assets/flags/is.png": "907840430252c431518005b562707831",
"assets/packages/intl_phone_field/assets/flags/it.png": "5c8e910e6a33ec63dfcda6e8960dd19c",
"assets/packages/intl_phone_field/assets/flags/je.png": "288f8dca26098e83ff0455b08cceca1b",
"assets/packages/intl_phone_field/assets/flags/jm.png": "074400103847c56c37425a73f9d23665",
"assets/packages/intl_phone_field/assets/flags/jo.png": "c01cb41f74f9db0cf07ba20f0af83011",
"assets/packages/intl_phone_field/assets/flags/jp.png": "25ac778acd990bedcfdc02a9b4570045",
"assets/packages/intl_phone_field/assets/flags/ke.png": "cf5aae3699d3cacb39db9803edae172b",
"assets/packages/intl_phone_field/assets/flags/kg.png": "c4aa6d221d9a9d332155518d6b82dbc7",
"assets/packages/intl_phone_field/assets/flags/kh.png": "d48d51e8769a26930da6edfc15de97fe",
"assets/packages/intl_phone_field/assets/flags/ki.png": "14db0fc29398730064503907bd696176",
"assets/packages/intl_phone_field/assets/flags/km.png": "5554c8746c16d4f482986fb78ffd9b36",
"assets/packages/intl_phone_field/assets/flags/kn.png": "f318e2fd87e5fd2cabefe9ff252bba46",
"assets/packages/intl_phone_field/assets/flags/kp.png": "e1c8bb52f31fca22d3368d8f492d8f27",
"assets/packages/intl_phone_field/assets/flags/kr.png": "a3b7da3b76b20a70e9cd63cc2315b51b",
"assets/packages/intl_phone_field/assets/flags/kw.png": "3ca448e219d0df506fb2efd5b91be092",
"assets/packages/intl_phone_field/assets/flags/ky.png": "38e39eba673e82c48a1f25bd103a7e97",
"assets/packages/intl_phone_field/assets/flags/kz.png": "cb3b0095281c9d7e7fb5ce1716ef8ee5",
"assets/packages/intl_phone_field/assets/flags/la.png": "e8cd9c3ee6e134adcbe3e986e1974e4a",
"assets/packages/intl_phone_field/assets/flags/lb.png": "f80cde345f0d9bd0086531808ce5166a",
"assets/packages/intl_phone_field/assets/flags/lc.png": "8c1a03a592aa0a99fcaf2b81508a87eb",
"assets/packages/intl_phone_field/assets/flags/li.png": "ecdf7b3fe932378b110851674335d9ab",
"assets/packages/intl_phone_field/assets/flags/lk.png": "5a3a063cfff4a92fb0ba6158e610e025",
"assets/packages/intl_phone_field/assets/flags/lr.png": "b92c75e18dd97349c75d6a43bd17ee94",
"assets/packages/intl_phone_field/assets/flags/ls.png": "2bca756f9313957347404557acb532b0",
"assets/packages/intl_phone_field/assets/flags/lt.png": "7df2cd6566725685f7feb2051f916a3e",
"assets/packages/intl_phone_field/assets/flags/lu.png": "6274fd1cae3c7a425d25e4ccb0941bb8",
"assets/packages/intl_phone_field/assets/flags/lv.png": "53105fea0cc9cc554e0ceaabc53a2d5d",
"assets/packages/intl_phone_field/assets/flags/ly.png": "8d65057351859065d64b4c118ff9e30e",
"assets/packages/intl_phone_field/assets/flags/ma.png": "057ea2e08587f1361b3547556adae0c2",
"assets/packages/intl_phone_field/assets/flags/mc.png": "90c2ad7f144d73d4650cbea9dd621275",
"assets/packages/intl_phone_field/assets/flags/md.png": "8911d3d821b95b00abbba8771e997eb3",
"assets/packages/intl_phone_field/assets/flags/me.png": "590284bc85810635ace30a173e615ca4",
"assets/packages/intl_phone_field/assets/flags/mf.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/packages/intl_phone_field/assets/flags/mg.png": "0ef6271ad284ebc0069ff0aeb5a3ad1e",
"assets/packages/intl_phone_field/assets/flags/mh.png": "18dda388ef5c1cf37cae5e7d5fef39bc",
"assets/packages/intl_phone_field/assets/flags/mk.png": "835f2263974de523fa779d29c90595bf",
"assets/packages/intl_phone_field/assets/flags/ml.png": "0c50dfd539e87bb4313da0d4556e2d13",
"assets/packages/intl_phone_field/assets/flags/mm.png": "32e5293d6029d8294c7dfc3c3835c222",
"assets/packages/intl_phone_field/assets/flags/mn.png": "16086e8d89c9067d29fd0f2ea7021a45",
"assets/packages/intl_phone_field/assets/flags/mo.png": "849848a26bbfc87024017418ad7a6233",
"assets/packages/intl_phone_field/assets/flags/mp.png": "87351c30a529071ee9a4bb67765fea4f",
"assets/packages/intl_phone_field/assets/flags/mq.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/packages/intl_phone_field/assets/flags/mr.png": "f2a62602d43a1ee14625af165b96ce2f",
"assets/packages/intl_phone_field/assets/flags/ms.png": "9c955a926cf7d57fccb450a97192afa7",
"assets/packages/intl_phone_field/assets/flags/mt.png": "f3119401ae0c3a9d6e2dc23803928c06",
"assets/packages/intl_phone_field/assets/flags/mu.png": "c5228d1e94501d846b5bf203f038ae49",
"assets/packages/intl_phone_field/assets/flags/mv.png": "d9245f74e34d5c054413ace4b86b4f16",
"assets/packages/intl_phone_field/assets/flags/mw.png": "ffc1f18eeedc1dfbb1080aa985ce7d05",
"assets/packages/intl_phone_field/assets/flags/mx.png": "84b12a569b209e213daccfcbdd1fc799",
"assets/packages/intl_phone_field/assets/flags/my.png": "f7f962e8a074387fd568c9d4024e0959",
"assets/packages/intl_phone_field/assets/flags/mz.png": "1ab1ac750fbbb453d33e9f25850ac2a0",
"assets/packages/intl_phone_field/assets/flags/na.png": "cdc00e9267a873609b0abea944939ff7",
"assets/packages/intl_phone_field/assets/flags/nc.png": "cb36e0c945b79d56def11b23c6a9c7e9",
"assets/packages/intl_phone_field/assets/flags/ne.png": "a20724c177e86d6a27143aa9c9664a6f",
"assets/packages/intl_phone_field/assets/flags/nf.png": "1c2069b299ce3660a2a95ec574dfde25",
"assets/packages/intl_phone_field/assets/flags/ng.png": "aedbe364bd1543832e88e64b5817e877",
"assets/packages/intl_phone_field/assets/flags/ni.png": "e398dc23e79d9ccd702546cc25f126bf",
"assets/packages/intl_phone_field/assets/flags/nl.png": "3649c177693bfee9c2fcc63c191a51f1",
"assets/packages/intl_phone_field/assets/flags/no.png": "33bc70259c4908b7b9adeef9436f7a9f",
"assets/packages/intl_phone_field/assets/flags/np.png": "6e099fb1e063930bdd00e8df5cef73d4",
"assets/packages/intl_phone_field/assets/flags/nr.png": "1316f3a8a419d8be1975912c712535ea",
"assets/packages/intl_phone_field/assets/flags/nu.png": "f4169998548e312584c67873e0d9352d",
"assets/packages/intl_phone_field/assets/flags/nz.png": "65c811e96eb6c9da65538f899c110895",
"assets/packages/intl_phone_field/assets/flags/om.png": "cebd9ab4b9ab071b2142e21ae2129efc",
"assets/packages/intl_phone_field/assets/flags/pa.png": "78e3e4fd56f0064837098fe3f22fb41b",
"assets/packages/intl_phone_field/assets/flags/pe.png": "4d9249aab70a26fadabb14380b3b55d2",
"assets/packages/intl_phone_field/assets/flags/pf.png": "1ae72c24380d087cbe2d0cd6c3b58821",
"assets/packages/intl_phone_field/assets/flags/pg.png": "0f7e03465a93e0b4e3e1c9d3dd5814a4",
"assets/packages/intl_phone_field/assets/flags/ph.png": "e4025d1395a8455f1ba038597a95228c",
"assets/packages/intl_phone_field/assets/flags/pk.png": "7a6a621f7062589677b3296ca16c6718",
"assets/packages/intl_phone_field/assets/flags/pl.png": "f20e9ef473a9ed24176f5ad74dd0d50a",
"assets/packages/intl_phone_field/assets/flags/pm.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/packages/intl_phone_field/assets/flags/pn.png": "0b0641b356af4c3e3489192ff4b0be77",
"assets/packages/intl_phone_field/assets/flags/pr.png": "b97b2f4432c430bc340d893f36527e31",
"assets/packages/intl_phone_field/assets/flags/ps.png": "52a25a48658ca9274830ffa124a8c1db",
"assets/packages/intl_phone_field/assets/flags/pt.png": "eba93d33545c78cc67915d9be8323661",
"assets/packages/intl_phone_field/assets/flags/pw.png": "2e697cc6907a7b94c7f94f5d9b3bdccc",
"assets/packages/intl_phone_field/assets/flags/py.png": "154d4add03b4878caf00bd3249e14f40",
"assets/packages/intl_phone_field/assets/flags/qa.png": "eb9b3388e554cf85aea1e739247548df",
"assets/packages/intl_phone_field/assets/flags/re.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/packages/intl_phone_field/assets/flags/ro.png": "85af99741fe20664d9a7112cfd8d9722",
"assets/packages/intl_phone_field/assets/flags/rs.png": "9dff535d2d08c504be63062f39eff0b7",
"assets/packages/intl_phone_field/assets/flags/ru.png": "6974dcb42ad7eb3add1009ea0c6003e3",
"assets/packages/intl_phone_field/assets/flags/rw.png": "d1aae0647a5b1ab977ae43ab894ce2c3",
"assets/packages/intl_phone_field/assets/flags/sa.png": "7c95c1a877148e2aa21a213d720ff4fd",
"assets/packages/intl_phone_field/assets/flags/sb.png": "296ecedbd8d1c2a6422c3ba8e5cd54bd",
"assets/packages/intl_phone_field/assets/flags/sc.png": "e969fd5afb1eb5902675b6bcf49a8c2e",
"assets/packages/intl_phone_field/assets/flags/sd.png": "65ce270762dfc87475ea99bd18f79025",
"assets/packages/intl_phone_field/assets/flags/se.png": "25dd5434891ac1ca2ad1af59cda70f80",
"assets/packages/intl_phone_field/assets/flags/sg.png": "bc772e50b8c79f08f3c2189f5d8ce491",
"assets/packages/intl_phone_field/assets/flags/sh.png": "98773db151c150cabe845183241bfe6b",
"assets/packages/intl_phone_field/assets/flags/si.png": "24237e53b34752554915e71e346bb405",
"assets/packages/intl_phone_field/assets/flags/sj.png": "33bc70259c4908b7b9adeef9436f7a9f",
"assets/packages/intl_phone_field/assets/flags/sk.png": "2a1ee716d4b41c017ff1dbf3fd3ffc64",
"assets/packages/intl_phone_field/assets/flags/sl.png": "61b9d992c8a6a83abc4d432069617811",
"assets/packages/intl_phone_field/assets/flags/sm.png": "a8d6801cb7c5360e18f0a2ed146b396d",
"assets/packages/intl_phone_field/assets/flags/sn.png": "68eaa89bbc83b3f356e1ba2096b09b3c",
"assets/packages/intl_phone_field/assets/flags/so.png": "1ce20d052f9d057250be96f42647513b",
"assets/packages/intl_phone_field/assets/flags/sr.png": "9f912879f2829a625436ccd15e643e39",
"assets/packages/intl_phone_field/assets/flags/ss.png": "b0120cb000b31bb1a5c801c3592139bc",
"assets/packages/intl_phone_field/assets/flags/st.png": "fef62c31713ff1063da2564df3f43eea",
"assets/packages/intl_phone_field/assets/flags/sv.png": "217b691efbef7a0f48cdd53e91997f0e",
"assets/packages/intl_phone_field/assets/flags/sx.png": "9c19254973d8acf81581ad95b408c7e6",
"assets/packages/intl_phone_field/assets/flags/sy.png": "24186a0f4ce804a16c91592db5a16a3a",
"assets/packages/intl_phone_field/assets/flags/sz.png": "d1829842e45c2b2b29222c1b7e201591",
"assets/packages/intl_phone_field/assets/flags/tc.png": "d728d6763c17c520ad6bcf3c24282a29",
"assets/packages/intl_phone_field/assets/flags/td.png": "009303b6188ca0e30bd50074b16f0b16",
"assets/packages/intl_phone_field/assets/flags/tf.png": "b2c044b86509e7960b5ba66b094ea285",
"assets/packages/intl_phone_field/assets/flags/tg.png": "7f91f02b26b74899ff882868bd611714",
"assets/packages/intl_phone_field/assets/flags/th.png": "11ce0c9f8c738fd217ea52b9bc29014b",
"assets/packages/intl_phone_field/assets/flags/tj.png": "c73b793f2acd262e71b9236e64c77636",
"assets/packages/intl_phone_field/assets/flags/tk.png": "60428ff1cdbae680e5a0b8cde4677dd5",
"assets/packages/intl_phone_field/assets/flags/tl.png": "c80876dc80cda5ab6bb8ef078bc6b05d",
"assets/packages/intl_phone_field/assets/flags/tm.png": "0980fb40ec450f70896f2c588510f933",
"assets/packages/intl_phone_field/assets/flags/tn.png": "6612e9fec4bef022cbd45cbb7c02b2b6",
"assets/packages/intl_phone_field/assets/flags/to.png": "1cdd716b5b5502f85d6161dac6ee6c5b",
"assets/packages/intl_phone_field/assets/flags/tr.png": "27feab1a5ca390610d07e0c6bd4720d5",
"assets/packages/intl_phone_field/assets/flags/tt.png": "a8e1fc5c65dc8bc362a9453fadf9c4b3",
"assets/packages/intl_phone_field/assets/flags/tv.png": "c57025ed7ae482210f29b9da86b0d211",
"assets/packages/intl_phone_field/assets/flags/tw.png": "b1101fd5f871a9ffe7c9ad191a7d3304",
"assets/packages/intl_phone_field/assets/flags/tz.png": "56ec99c7e0f68b88a2210620d873683a",
"assets/packages/intl_phone_field/assets/flags/ua.png": "b4b10d893611470661b079cb30473871",
"assets/packages/intl_phone_field/assets/flags/ug.png": "9a0f358b1eb19863e21ae2063fab51c0",
"assets/packages/intl_phone_field/assets/flags/um.png": "8fe7c4fed0a065fdfb9bd3125c6ecaa1",
"assets/packages/intl_phone_field/assets/flags/us.png": "83b065848d14d33c0d10a13e01862f34",
"assets/packages/intl_phone_field/assets/flags/uy.png": "da4247b21fcbd9e30dc2b3f7c5dccb64",
"assets/packages/intl_phone_field/assets/flags/uz.png": "3adad3bac322220cac8abc1c7cbaacac",
"assets/packages/intl_phone_field/assets/flags/va.png": "c010bf145f695d5c8fb551bafc081f77",
"assets/packages/intl_phone_field/assets/flags/vc.png": "da3ca14a978717467abbcdece05d3544",
"assets/packages/intl_phone_field/assets/flags/ve.png": "893391d65cbd10ca787a73578c77d3a7",
"assets/packages/intl_phone_field/assets/flags/vg.png": "fc095e11f5b58604d6f4d3c2b43d167f",
"assets/packages/intl_phone_field/assets/flags/vi.png": "3f317c56f31971b3179abd4e03847036",
"assets/packages/intl_phone_field/assets/flags/vn.png": "32ff65ccbf31a707a195be2a5141a89b",
"assets/packages/intl_phone_field/assets/flags/vu.png": "3f201fdfb6d669a64c35c20a801016d1",
"assets/packages/intl_phone_field/assets/flags/wf.png": "6f1644b8f907d197c0ff7ed2f366ad64",
"assets/packages/intl_phone_field/assets/flags/ws.png": "f206322f3e22f175869869dbfadb6ce8",
"assets/packages/intl_phone_field/assets/flags/xk.png": "079259fbcb1f3c78dafa944464295c16",
"assets/packages/intl_phone_field/assets/flags/ye.png": "4cf73209d90e9f02ead1565c8fdf59e5",
"assets/packages/intl_phone_field/assets/flags/yt.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/packages/intl_phone_field/assets/flags/za.png": "b28280c6c3eb4624c18b5455d4a1b1ff",
"assets/packages/intl_phone_field/assets/flags/zm.png": "81cec35b715f227328cad8f314acd797",
"assets/packages/intl_phone_field/assets/flags/zw.png": "078a3267ea8eabf88b2d43fe4aed5ce5",
"assets/packages/sign_in_button/assets/logos/2.0x/facebook_new.png": "dd8e500c6d946b0f7c24eb8b94b1ea8c",
"assets/packages/sign_in_button/assets/logos/2.0x/google_dark.png": "68d675bc88e8b2a9079fdfb632a974aa",
"assets/packages/sign_in_button/assets/logos/2.0x/google_light.png": "1f00e2bbc0c16b9e956bafeddebe7bf2",
"assets/packages/sign_in_button/assets/logos/3.0x/facebook_new.png": "689ce8e0056bb542425547325ce690ba",
"assets/packages/sign_in_button/assets/logos/3.0x/google_dark.png": "c75b35db06cb33eb7c52af696026d299",
"assets/packages/sign_in_button/assets/logos/3.0x/google_light.png": "3aeb09c8261211cfc16ac080a555c43c",
"assets/packages/sign_in_button/assets/logos/facebook_new.png": "93cb650d10a738a579b093556d4341be",
"assets/packages/sign_in_button/assets/logos/google_dark.png": "d18b748c2edbc5c4e3bc221a1ec64438",
"assets/packages/sign_in_button/assets/logos/google_light.png": "f71e2d0b0a2bc7d1d8ab757194a02cac",
"assets/packages/timezone/data/latest_all.tzf": "871b8008607c14f36bae2388a95fdc8c",
"assets/resources/language/en.json": "dcdb92171ee8e5be61eb36753ae73a02",
"assets/resources/language/he.json": "45c0d5c9d416914da10fe251e6747a97",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "92af355f3f7ff3c5c09c95c33a056542",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "e56e4fac8c4984b4a9de89fbba01af80",
"icons/Icon-192.webp": "2903e48f404010339ee9afff2afb8200",
"icons/Icon-512.png": "4a6f37067c30d7e9ac57e3630f8a0208",
"icons/Icon-512.webp": "220996b0f9ce272d15f07ca970db4252",
"icons/Icon-maskable-192.png": "e56e4fac8c4984b4a9de89fbba01af80",
"icons/Icon-maskable-192.webp": "2903e48f404010339ee9afff2afb8200",
"icons/Icon-maskable-512.png": "4a6f37067c30d7e9ac57e3630f8a0208",
"icons/Icon-maskable-512.webp": "220996b0f9ce272d15f07ca970db4252",
"index.html": "c97a9ef787dd0c8719ba22ae0a631b02",
"/": "c97a9ef787dd0c8719ba22ae0a631b02",
"main.dart.js": "417b6dc7aa3a1700731f4221fc3b5cf8",
"main.dart.js_1.part.js": "a0dfe3add2b80c2f4b8987070517a65f",
"main.dart.js_10.part.js": "8e647c37b631bce32e662186cf6ff49b",
"main.dart.js_103.part.js": "5daaf1b0c0f8fdfcf652c30268cef7c8",
"main.dart.js_105.part.js": "db838988228d0800c6ebe14bc9a0c20a",
"main.dart.js_106.part.js": "5f9194a02dc4e3319643f13a10029d0f",
"main.dart.js_108.part.js": "a2d5a1d7099220d9be408668e2fe384c",
"main.dart.js_109.part.js": "f08e4377346ae9d62b86d8bfb7f6d872",
"main.dart.js_11.part.js": "3d876ffde568417f43090c81100842dd",
"main.dart.js_111.part.js": "52aa8d76302f798908d84bbb17be666d",
"main.dart.js_112.part.js": "92433d2516dd8494c11c5556568dddb9",
"main.dart.js_117.part.js": "d8ad99b6b284d99226d0e84a1d602bfe",
"main.dart.js_118.part.js": "19f8e153b7b32f3a48fd025da6d41206",
"main.dart.js_119.part.js": "b716d60b8618f1977310e88ae9c22567",
"main.dart.js_12.part.js": "01ba70935325ef6ca14e37165e1259da",
"main.dart.js_120.part.js": "30c302d33f5e5da718ea6562694ae296",
"main.dart.js_121.part.js": "98a2ba6c8e57a73df9b5b5e5b1db0f6a",
"main.dart.js_122.part.js": "f61e71d79f723bfa5b278944aa81038f",
"main.dart.js_123.part.js": "1a04878b852fdd69d47a3ecbf145c24b",
"main.dart.js_124.part.js": "11458ece81a4fe640f8cd3d668b1e0b2",
"main.dart.js_125.part.js": "016ccb88c7a44df52587fc48adc5cbaf",
"main.dart.js_126.part.js": "bf5907f8fed2b44da0689390a1d5c242",
"main.dart.js_127.part.js": "1273802ed807529589a172bc94f3640a",
"main.dart.js_128.part.js": "fa496bb1eefc3022fe5cb6f297a0db41",
"main.dart.js_129.part.js": "d42c34184725d2b3d911abb087ff39fd",
"main.dart.js_130.part.js": "eeec331338d5f300b2c837816e1979b3",
"main.dart.js_132.part.js": "d0af624a017d19c69c6456156a498570",
"main.dart.js_133.part.js": "6a63c95428290c2be804f65d9de7d0fd",
"main.dart.js_134.part.js": "2712e912cd91f61dc099793a6a9543e0",
"main.dart.js_138.part.js": "74d399570b6f4800f536a5ba9bb150ca",
"main.dart.js_139.part.js": "6058aaa5b5e10fb9a722e801b69adebc",
"main.dart.js_141.part.js": "1b9768efe6aafd60a53bb5d24e043f55",
"main.dart.js_143.part.js": "6d91e04111878aad6dcbd6b7ad67a5e9",
"main.dart.js_144.part.js": "75e4611ff24dd9719e6bf06ef3aa4c8f",
"main.dart.js_145.part.js": "31e46f00c6b4cad05f9167d265cbcc40",
"main.dart.js_146.part.js": "76ed39e516d97ca5318ca061790ab605",
"main.dart.js_147.part.js": "1eaca5d05dfb74823779e26b64ee8683",
"main.dart.js_148.part.js": "35c002a35a3cd0227834cdf82eb11382",
"main.dart.js_150.part.js": "f8363e42776dcc73c784debfc77006e3",
"main.dart.js_151.part.js": "804441ce5a21a9ef2da9a227a2afbbe9",
"main.dart.js_152.part.js": "88e1470c4236972045713f129d1eb95d",
"main.dart.js_153.part.js": "3c1b3684849d6d4ddf7bc4cd241d0803",
"main.dart.js_155.part.js": "ac454d2ae4f953f2e2a422c709806d5e",
"main.dart.js_156.part.js": "c2f4f2322038876a015c14ee357ae1e5",
"main.dart.js_159.part.js": "f7eaec635cae76f3fbb09a6785501ded",
"main.dart.js_16.part.js": "11b4e1f32dd115f95f5ab6f4d7a7f229",
"main.dart.js_160.part.js": "52630f6e5413fef6b4dc226f2166de43",
"main.dart.js_161.part.js": "cd5f18e0ed71cf11adb4722329cf41fa",
"main.dart.js_162.part.js": "1cfaef5658508d3619efe557d8cc3e5d",
"main.dart.js_163.part.js": "2664bd24d9cb4689ec94d625aa2ae480",
"main.dart.js_164.part.js": "f0ca74e79de1d3f71fbd9f7d1f5b3744",
"main.dart.js_165.part.js": "b508b7f3394adf3e0c3e3749948bd932",
"main.dart.js_166.part.js": "92fdfabb7a9f8cee99fd26b7de26fe08",
"main.dart.js_167.part.js": "c899fcc1e424130c1d4fa05d8ef85a4c",
"main.dart.js_168.part.js": "e78534edb7ed94be5d877c0f10482669",
"main.dart.js_169.part.js": "33e45351f270bc9e0fcd665fc4bc0e73",
"main.dart.js_17.part.js": "327a6df00e39825ed226bbad7e9daa26",
"main.dart.js_171.part.js": "46d89adf108a98ac17be7645a716795f",
"main.dart.js_173.part.js": "c3939ffe6644d58e8523eaaef99a6b84",
"main.dart.js_174.part.js": "eb1c620f06d9d52d1beb8eb4f6dd6b32",
"main.dart.js_176.part.js": "aa7b067d5c6984d7cc36f82996d96afe",
"main.dart.js_177.part.js": "a37d164d963690b01170083a40c22fa9",
"main.dart.js_178.part.js": "e5a037eabd6b07149522463436bf9888",
"main.dart.js_179.part.js": "c5a510faa9752ebfe6a1315f3f93ca32",
"main.dart.js_181.part.js": "52d850b782c93503377e7ba57cf73fc1",
"main.dart.js_183.part.js": "63dd22791f8956759d0d438cfd45cbd9",
"main.dart.js_184.part.js": "162a208fe957ee11b50f1fb669e89b09",
"main.dart.js_185.part.js": "47c093a44c92db89ac0bd24fbdaf04bf",
"main.dart.js_186.part.js": "0b79fdd0ce9335c6d802f5f21ca16ef4",
"main.dart.js_187.part.js": "e14812779f00662c33c78cb6f3d91d93",
"main.dart.js_189.part.js": "6c70dd1d10a04ea973da7277f72c54d8",
"main.dart.js_191.part.js": "d08a70891cc4993f2e580d12e075dbe5",
"main.dart.js_192.part.js": "2d13c7e66f0c8346aa498f212e3827f6",
"main.dart.js_194.part.js": "718f779475863b075977ea5168a42b1d",
"main.dart.js_195.part.js": "90c5f6b1ceded6b14026c1480b1da372",
"main.dart.js_196.part.js": "79a5c4f2fcd063f422d060caefa61ee6",
"main.dart.js_197.part.js": "71670a4961e6dd1ba9faa5bea60e8277",
"main.dart.js_198.part.js": "5520730219a3d833995a42572c733729",
"main.dart.js_199.part.js": "e1f79a75cea6028756376e0850e493f6",
"main.dart.js_200.part.js": "f45c311e1bb2ad0021542144dac26c08",
"main.dart.js_201.part.js": "b2c9c234a5f4eb50033eaf3179b8614e",
"main.dart.js_202.part.js": "bf0352927d5e6ed3aa7067630750970b",
"main.dart.js_203.part.js": "081be1543e3ffa6120019d8d260388e3",
"main.dart.js_204.part.js": "c0996f691977920f58305a06b9b4331f",
"main.dart.js_205.part.js": "af866a208589b359c3e17e0023a64018",
"main.dart.js_206.part.js": "e9b9cb044919769c44e70b7b2a89272b",
"main.dart.js_207.part.js": "526e3cdda6e9ed55992cf3717b0d8740",
"main.dart.js_208.part.js": "a89e6ee293a97d6331f9d82d4292b093",
"main.dart.js_209.part.js": "0374631cfabd9e8ce95259476d542186",
"main.dart.js_21.part.js": "b6330967bbdf63bb8f5a497401769e27",
"main.dart.js_211.part.js": "b24690afdfbbfaf582f64de626b1f626",
"main.dart.js_212.part.js": "10bb89ca11da640f946b346a85c4bc17",
"main.dart.js_213.part.js": "c1e0d5e91ca2a161759d3ba8b4b9ac84",
"main.dart.js_214.part.js": "e397dd42235552c07d2cb37f7e786eb5",
"main.dart.js_215.part.js": "55b5459e5fbc7a7117c823f6fe8874c6",
"main.dart.js_216.part.js": "b704156477f24cd7ed279d322a81b74c",
"main.dart.js_219.part.js": "0906e7d47dd221d7645f963321019e64",
"main.dart.js_221.part.js": "82e291e56507e658ed55a0db0683ce07",
"main.dart.js_222.part.js": "22760bf568d87b4d65e8beb901bd5a2b",
"main.dart.js_224.part.js": "6a3550ca43a4dc32d35946230e9dcbf4",
"main.dart.js_229.part.js": "9f6d71f0392895b3157a733c985f2a6e",
"main.dart.js_23.part.js": "247a8dc3a634fbd01e95ccd93b607c7e",
"main.dart.js_233.part.js": "013fd350cd5ed51bc9358489952e9bc0",
"main.dart.js_234.part.js": "cd27991f3e1ce4f2b079a64f7deedf3e",
"main.dart.js_235.part.js": "dec1a46fe10e2e927d1608afa9ad3254",
"main.dart.js_236.part.js": "dca5f3c8a9595fc7799d480dfc925ab8",
"main.dart.js_237.part.js": "e4c66d20b33e15b06095aaf065bc557f",
"main.dart.js_238.part.js": "fd20632688364a533ee0c6269321a58e",
"main.dart.js_239.part.js": "8ef2d65944223a474786edbf309eca0c",
"main.dart.js_24.part.js": "5d6955eb6b764d74fb3e323b7b0a7c94",
"main.dart.js_240.part.js": "fdc8aee41982edc241ba3d11cf600dae",
"main.dart.js_241.part.js": "68f86502b8b64bcc6ad7fe59fc85fcb1",
"main.dart.js_246.part.js": "c65caf194fcd061e90c0e26e32aa82d7",
"main.dart.js_248.part.js": "0b258e244e07ba53fb8f13c61e14117a",
"main.dart.js_249.part.js": "46e9ef70a6ed3aeb816a4d199359b662",
"main.dart.js_25.part.js": "a5ece56f6b7ef61103b0db37e8dfc06f",
"main.dart.js_250.part.js": "757e6f728965b4a24427497155d9193a",
"main.dart.js_251.part.js": "15cd4b5d2e29d4a820c1e3c5c6a68fcc",
"main.dart.js_253.part.js": "424e848cf3ef8dbf1582aed45517f93e",
"main.dart.js_254.part.js": "a85e57fcbaa9bdf5b64408469b80450a",
"main.dart.js_256.part.js": "bdab8ca4dbfbc3f53e47e0e769f90582",
"main.dart.js_257.part.js": "15486c4c8da9f5781b5171e37628a9d1",
"main.dart.js_258.part.js": "92d9b5d24f9f82737223b36e0ff55694",
"main.dart.js_26.part.js": "99fa491499c9d7446e83f96d6a5e28b5",
"main.dart.js_260.part.js": "782b0529725856940280857298609cd1",
"main.dart.js_261.part.js": "056dc3811a0f76c81c5af17d2a994e56",
"main.dart.js_262.part.js": "fe6fd980f98aff5594c34fb0a4a417a2",
"main.dart.js_263.part.js": "74467b517bcbdee229927135ad9769e2",
"main.dart.js_264.part.js": "bdbac98718ad1572a5f1dfa353b16965",
"main.dart.js_266.part.js": "d364ac2ce897d90b842140d4a128e9c3",
"main.dart.js_267.part.js": "a7a703015960eb8156f1f0d24fdb13fe",
"main.dart.js_268.part.js": "33dcf5531a54f2d5f473bf88a1ddc0b1",
"main.dart.js_269.part.js": "5def9ec1ad0b003ee4e97d55469c9a92",
"main.dart.js_27.part.js": "76b3ff7eea9d62acdd2f429d8693db67",
"main.dart.js_271.part.js": "e700d7e7b6aac72f03379985ecfc38c2",
"main.dart.js_272.part.js": "edb5b9a186fb538abe7c6123517a8db3",
"main.dart.js_273.part.js": "0e96a359577b07629dd8a7e8543023ee",
"main.dart.js_274.part.js": "d22b54c3438b5f20571fda8f76265438",
"main.dart.js_275.part.js": "ca6039c829c60f941690b8d832320cc1",
"main.dart.js_278.part.js": "68bf84322c23e6de9c8697b2dda1644d",
"main.dart.js_279.part.js": "6938142600217d27cc01c39bde342392",
"main.dart.js_28.part.js": "a8097c587f8ce2a293fe53d185a98b0c",
"main.dart.js_280.part.js": "32a53e60d9176623420325057caa6370",
"main.dart.js_281.part.js": "5c27b603eaf545b2f4cff4eb921f719f",
"main.dart.js_282.part.js": "dd54ff4c921d91ab6122ff3aec5d3c14",
"main.dart.js_283.part.js": "4dd23a2dc8cd42287fa374899f9070ff",
"main.dart.js_284.part.js": "acf8a0240c6061e8221998af1ae94874",
"main.dart.js_285.part.js": "ee9c07c77b67a82178b8b502ea3021fd",
"main.dart.js_286.part.js": "906fe95736faf4de7f6edb73d527d168",
"main.dart.js_287.part.js": "bc6e0aa2ed72eddeb9b0752bab4b86d5",
"main.dart.js_288.part.js": "45d1f6902fbb11c1472aa2eb22c82046",
"main.dart.js_289.part.js": "f6137f687cce4f6c9575f9a7d85f098f",
"main.dart.js_29.part.js": "4915f278f202ae6c7648314c007157ce",
"main.dart.js_291.part.js": "278f0e5b4f6fb8af3de36df1044841c8",
"main.dart.js_292.part.js": "0e4cbb39513a31ad8dc4ca0f020755f1",
"main.dart.js_293.part.js": "4b8e3ca315bed7e8ed8cb5d6813a6229",
"main.dart.js_294.part.js": "ee46a7e14296b4efca51ead0d1087657",
"main.dart.js_295.part.js": "a356c38d64b3f22532e41f1e63d32041",
"main.dart.js_296.part.js": "22abf21b7adb4032469230e9de9fe546",
"main.dart.js_297.part.js": "a88266b05d467d14aba9de2c19dbfa4f",
"main.dart.js_299.part.js": "4a8d4e50fae4b43f41f582b10b3913ce",
"main.dart.js_3.part.js": "19f9bbab8094a9a820276aa5408065fe",
"main.dart.js_301.part.js": "f678850ce27454166fe8a3dcd354b8d3",
"main.dart.js_302.part.js": "b0dabb25999b08de1cb5043d07a52db8",
"main.dart.js_303.part.js": "6356e79ad933e04e1649f49aefb68185",
"main.dart.js_304.part.js": "81cd6e8bc8d572ff165be4988cf1734f",
"main.dart.js_305.part.js": "02b081cca07fa227437d60e6dffc036f",
"main.dart.js_306.part.js": "1751b072bab3a297f20e64bbc2d8b041",
"main.dart.js_307.part.js": "5a686dc5d3a1fe7da0797df76fd5a76b",
"main.dart.js_32.part.js": "ebcf6ac4e007e51b3dbcee9f61031124",
"main.dart.js_33.part.js": "381bead0be2d75f4dccec3f194a67ce0",
"main.dart.js_34.part.js": "c6af431e6870374a7f15fcd994bff287",
"main.dart.js_37.part.js": "3fe80da3399047f7333852569bbc550e",
"main.dart.js_38.part.js": "ae21a1504f29d4b316fb1fcb4d1b1428",
"main.dart.js_4.part.js": "77ffcb8afcfc654e5e48bec8c10fecb0",
"main.dart.js_40.part.js": "a95a92b3cb94b90a45841704f1344444",
"main.dart.js_41.part.js": "291ffacfccb8d77dc9c2517c49289c2c",
"main.dart.js_44.part.js": "827fd12821e7b2368362d3424993275a",
"main.dart.js_45.part.js": "0fe2f906675d6b11a7e2d0eaf4aa7acf",
"main.dart.js_46.part.js": "5efa5824daf1d6a2e015d30aef758861",
"main.dart.js_47.part.js": "18beb6a7d43939fe1a0edfc816ebbe5e",
"main.dart.js_48.part.js": "c295a0cc685d2cd340df2a61e3847422",
"main.dart.js_5.part.js": "fe16c6a20ba5b3de537266a72868511d",
"main.dart.js_50.part.js": "b8f425e68ce81f068707d4070c518d5b",
"main.dart.js_51.part.js": "2d9a0a934ca82ec997d34a9338353c9d",
"main.dart.js_55.part.js": "51802364158e19c99ed004ca4e83853b",
"main.dart.js_56.part.js": "9533c36f5f7afd8d55df891bd8bf5773",
"main.dart.js_57.part.js": "dbb594f24b55d60758035f4d44016d23",
"main.dart.js_58.part.js": "8c2f3880fdfa8b853a903c27c01e8bf6",
"main.dart.js_59.part.js": "79d7c286f41179dd99e3be4f204088e9",
"main.dart.js_6.part.js": "940c7fa120d755ae7b6566c0e6a0dfa1",
"main.dart.js_60.part.js": "497fd6b02eb032de43d10b9fd6c2b645",
"main.dart.js_61.part.js": "9d94d0ea4e15b32a6bf69067c7b07fb0",
"main.dart.js_62.part.js": "fdd26e38c9ed495a09031cbf961d6805",
"main.dart.js_63.part.js": "443aec1f130927a7cc856d68dd65647b",
"main.dart.js_64.part.js": "e338f22bd7226b7377707e993c083410",
"main.dart.js_66.part.js": "107a6158f833567f72ec06b1ce87a444",
"main.dart.js_67.part.js": "4ec3ee1934a93502f26b297f744e0112",
"main.dart.js_69.part.js": "cf945da9769657214fa552436155b8be",
"main.dart.js_70.part.js": "8494bbd666a3c0ae5560a4f099750320",
"main.dart.js_71.part.js": "6aee84ff64d48eac4264aa2e4362e5c8",
"main.dart.js_79.part.js": "20931d74fc28c7a7103fbc66ba5e64bb",
"main.dart.js_80.part.js": "880b0b7327f80cddf9e8c5c9cc7e47d0",
"main.dart.js_83.part.js": "0e6891ed14c8a55a463523ae26eb09b6",
"main.dart.js_85.part.js": "1b31c743178ec4b8f733f30b9bf9f391",
"main.dart.js_86.part.js": "b39a8e91f1ae1a2206781079e3afe179",
"main.dart.js_87.part.js": "9748ef2ded9790ca3c84ce75741e62b5",
"main.dart.js_88.part.js": "4c7de3034c2e21a283110c1fb9fa37ee",
"main.dart.js_9.part.js": "7b5a105fde18e63f1b457c32d802228f",
"main.dart.js_92.part.js": "df3a55489334f84a0a1948007baaaf49",
"main.dart.js_93.part.js": "7046db6d590c1865e55d26adc67ecd71",
"main.dart.js_94.part.js": "6373f8c15e66fcb9ceb6bebc46911345",
"main.dart.js_95.part.js": "9989cd014e61d02a1dbf8f68d75da873",
"main.dart.js_96.part.js": "243eef791d7c2ddd063aa8f31e116ee1",
"main.dart.js_97.part.js": "8179726b6182b88739584ecbd5ad1258",
"main.dart.js_98.part.js": "b93bdb6b3e9c3b2111120335be51ef28",
"main.dart.js_99.part.js": "7eda5857266d42b70addfb2e0086537b",
"manifest.json": "625682af20e159dadaf8f9d3382b1a02",
"splash/img/dark-1x.png": "fafdf59391c62ccb851ad0cc14c52b7d",
"splash/img/dark-2x.png": "c40e64b7d0468461d40b0fac9f9c2725",
"splash/img/dark-3x.png": "bfa3c90e2bf998c890b56dc06e04c297",
"splash/img/dark-4x.png": "59d5cbf1e82a2157f6cc089c272d1a62",
"splash/img/light-1x.png": "fafdf59391c62ccb851ad0cc14c52b7d",
"splash/img/light-2x.png": "c40e64b7d0468461d40b0fac9f9c2725",
"splash/img/light-3x.png": "bfa3c90e2bf998c890b56dc06e04c297",
"splash/img/light-4x.png": "59d5cbf1e82a2157f6cc089c272d1a62",
"splash/splash.js": "d6c41ac4d1fdd6c1bbe210f325a84ad4",
"splash/style.css": "b3a49d816f57c7ee9049c9adb35bc80b",
"version.json": "ddc663358020bd943dd59c3a661132b7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
