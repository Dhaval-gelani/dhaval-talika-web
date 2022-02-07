'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "8d1fbcc2bfef4cac73f82b40b64dd417",
"assets/assets/images/consent/imgw1.png": "fb5c129d8705d931814136bec819e5f7",
"assets/assets/images/consent/imgw2.png": "53a5e0b97742dc75bed97cc860dcdb22",
"assets/assets/images/consent/imgw3.png": "7868ba353bd259f640ec53d0e6f8a9e6",
"assets/assets/images/consent/imgw4.png": "7a8527fc17722c87a81f720c9be9e004",
"assets/assets/images/consent/imgw5.png": "63476caf88ce04f5a87dcd153f8ad0d6",
"assets/assets/images/discrimination/9w1.png": "5de6b63e4fdd9246acf83ac009376b08",
"assets/assets/images/discrimination/9w2.png": "393234c1886becb3634791f3ddd97fd6",
"assets/assets/images/discrimination/9w3.png": "defe5fff39514df129e6309b3131138c",
"assets/assets/images/discrimination/9w4.png": "19ec7c804745d4864fd591aa7b10eae2",
"assets/assets/images/discrimination/9w5.png": "bef5e10660da5402120db335c73c5950",
"assets/assets/images/domestic/2w1.png": "eb308403913401870d9c7670f92280a3",
"assets/assets/images/domestic/2w2.png": "f75c2e88097ca33bbe28580e54bee97d",
"assets/assets/images/domestic/2w3.png": "d324df9c2d91ecf896e1c7f1f5981c91",
"assets/assets/images/domestic/2w4.png": "639ab17b1bc0fc206cbfb88bf18a80fc",
"assets/assets/images/domestic/2w5.png": "ae8c1f36f155195fb5cb5185e7027f14",
"assets/assets/images/domestic/2w6.png": "06a23e905977076e144d99cac92a4ecd",
"assets/assets/images/dowry/3w1.png": "57fb7212fdabc725293db7eb1c2315aa",
"assets/assets/images/dowry/3w2.png": "f1275b6a82806c8a09bcfa2989226f67",
"assets/assets/images/dowry/3w3.png": "7a18dcbd8dcbebed52e6fac59d7ad29f",
"assets/assets/images/gov_scheme_screen/gov_scheme_ima1.png": "277d36a7c57cb1bcd9c16a56072e2bdd",
"assets/assets/images/gov_scheme_screen/gov_scheme_ima2.jpg": "fcb5e6b626eb849402a3e414efa1f910",
"assets/assets/images/gov_scheme_screen/gov_scheme_ima3.jpg": "92ddef68d87856aac15dd13175d1c761",
"assets/assets/images/gov_scheme_screen/gov_scheme_ima4.jpg": "1da9d71711119a02bdcaaab998a1b69c",
"assets/assets/images/gov_scheme_screen/gov_scheme_ima5.png": "c0c3e81afa52b1480b4f4cf8fa408e6a",
"assets/assets/images/gov_scheme_screen/gov_scheme_ima6.jpg": "05222016509b9330beadd2e73839ae52",
"assets/assets/images/gov_scheme_screen/gov_scheme_ima7.jpg": "f7d99617a37d3f2f0fea52cc98f44510",
"assets/assets/images/gov_scheme_screen/gov_scheme_ima8.jpg": "10044239957695dfab141b715ee69774",
"assets/assets/images/gov_scheme_screen/gov_scheme_ima9.jpg": "aa37ef89a4ffebb6904746be6910e893",
"assets/assets/images/gov_scheme_screen/kyr_women.png": "f597b212bcaa5ddf62522fb280675d72",
"assets/assets/images/gov_scheme_screen/title_ima1.png": "bd187252fee7ce5e2cdc25f322738d31",
"assets/assets/images/gov_scheme_screen/title_ima2.png": "690d6a9a5f2a0c2d43fb72606c644a3d",
"assets/assets/images/gov_scheme_screen/title_ima3.png": "46108edc10a3c253fb07be4530b1f833",
"assets/assets/images/gov_scheme_screen/title_ima4.png": "fb1aa4df4334d5a656b45bfaf970d8aa",
"assets/assets/images/gov_scheme_screen/title_ima5.png": "0fca4eefe5ecef20d8281c74ae0cdcc3",
"assets/assets/images/harasment/6w1.png": "949c7247083391b4a0caaed38e1dcaa4",
"assets/assets/images/harasment/6w2.png": "c02641166513741b7cf9eb7855e78ea9",
"assets/assets/images/harasment/6w3.png": "e371a35ea12e0f545a76276e37dcdfa3",
"assets/assets/images/harasment/6w4.png": "9c603adefcd0123f95b5230ccb0651a5",
"assets/assets/images/list/l1.png": "b3049826629897a664aa78d631fc9510",
"assets/assets/images/list/l2.png": "d46c1ab687e7c5c99e50f72e85f6e40d",
"assets/assets/images/list/l3.png": "2122b11233758e3fcb13fff942279b3f",
"assets/assets/images/list/l4.png": "2efc9e98259df6a182126598fa1a854d",
"assets/assets/images/list/l5.png": "0400e1b22d41217dd2dbcbbd19e10b88",
"assets/assets/images/list/l6.png": "dd69007e7bc11be334ad53af1c6c3b33",
"assets/assets/images/list/l7.png": "8eecdf47f913bed63f8128ee4735abbe",
"assets/assets/images/nf/chat.png": "9e7edede2e15f46670b5ec94c6877a2f",
"assets/assets/images/nf/doctor.png": "aafe00a7c649d7ee63615d8b45b811e5",
"assets/assets/images/nf/fm1.png": "0ff4540715296d5a40b2ad8b34c8cb52",
"assets/assets/images/nf/fp1.png": "ef4447bd1a14c38678259f397fd50552",
"assets/assets/images/nf/lawyer.png": "83a689056a3ec80db43d17f8a1560378",
"assets/assets/images/nf/rape1.png": "62dee75d36c5925c6dbd9ec477e26b51",
"assets/assets/images/nf/rape2.png": "dd1e2568c8f6f2bf28ed4c444f794554",
"assets/assets/images/nf/rh1.png": "eb9206275719470e481b740c8831bb7f",
"assets/assets/images/nf/rh2.png": "2c0432f08abea038a0879d8af4b89905",
"assets/assets/images/nf/rh3.png": "f441835836250304b7fc5d8129a341e6",
"assets/assets/images/nf/rh4.png": "a4964cc8c3b0ed76bbdf08eea42fdb52",
"assets/assets/images/nf/seha1.png": "e32b7ea87ceb0a85d7e031178814fe1f",
"assets/assets/images/other/bad.png": "83d9f615bac12ddcc584bb382f21e284",
"assets/assets/images/other/chat.png": "3d487d67067244685c8cf8cb81b08da2",
"assets/assets/images/other/complaint.png": "5b0b6ca9562e2a41ef682ac313526256",
"assets/assets/images/other/court.png": "ea23f37c1fb60d94c8fcb0afae7411bf",
"assets/assets/images/other/docter.png": "02078fbda9738789c2b132f8321f44b0",
"assets/assets/images/other/fir.png": "bf4bab262b465477d6e2d6c57802b0a4",
"assets/assets/images/other/handcuffs.png": "e6ef9ee79f937afb49ce77dfe2000a6e",
"assets/assets/images/other/helpline.png": "5eec919e6a501a8b2bd2fdbec5a1cc6a",
"assets/assets/images/other/hospital.png": "40feac2d6fe7353831e73820317fc67d",
"assets/assets/images/other/lawyer.png": "b9ae24c7f4c0f30262fe1eab2fe07068",
"assets/assets/images/other/police.png": "aee4ac1bcb22fec286d18dfa6b323584",
"assets/assets/images/other/schoolgirl.png": "4ce44f85f609a5960231a07d8cdaf0cf",
"assets/assets/images/other/station.png": "495e4ac5d1ee085d6cfdda96209691b1",
"assets/assets/images/other/tester.png": "50218b0d76504a7decdc4eb87b5efecb",
"assets/assets/images/other/woman.png": "d8b015f1c5e8f2f6d11ee15ef863b354",
"assets/assets/images/pragnancy/10w1.png": "2d67e3ccbc3e1f4c84103a2c89fd1518",
"assets/assets/images/pragnancy/10w2.png": "62cffb735c958969a11513024d60ca09",
"assets/assets/images/pragnancy/10w3.png": "d297e3fa19bf661c8364b3aee47de49a",
"assets/assets/images/pragnancy/10w4.png": "b9e1f980586767d218e36248453314cc",
"assets/assets/images/pragnancy/10w5.png": "0f38e8d508e8856fc557be610958f027",
"assets/assets/images/pragnancy/10w6.png": "c9302188276c52dc7a225db334534253",
"assets/assets/images/pragnancy/10w7.png": "3ed9624c73867181690fc7a346d57204",
"assets/assets/images/pragnancy/10w8.png": "128ded248d4d42c79a94b41bd0a6fea6",
"assets/assets/images/pragnancy/10w9.png": "9b0a7a39401accfa7c0564793a0d8a34",
"assets/assets/images/prostitute/8w1.png": "357a8dff079b72ff140d8e4ed831e5a6",
"assets/assets/images/prostitute/8w2.png": "9f01a82685da7aece5b078baeaaf4980",
"assets/assets/images/title/ima1.png": "cc7f8b9b525acd51bc33bb2347896bc4",
"assets/assets/images/title/ima2.png": "4fc4552953a6b56ea7cf86b510dbe566",
"assets/assets/images/title/ima3.png": "b006cb9281bfd5d877707a1ef31f0366",
"assets/assets/images/title/ima4.png": "dbaef58263242e054f3640cc700b3537",
"assets/assets/images/title/ima5.png": "f7f8005897edb97dae2fb53b7fd86a24",
"assets/assets/images/title/ima6.png": "e246db7d41f79078b32c3f833277322f",
"assets/assets/images/title/ima7.png": "03d85717dc8aee301985d80fc24a6434",
"assets/assets/images/title/ima8.png": "7c5d82e4e296bc9e74363ad94544f2b1",
"assets/assets/images/title/ima9.png": "ed7194e48a4c526e0cb069ab85f51d75",
"assets/assets/images/title/title10.png": "b342218da49b2f6e04a2e3c937810ede",
"assets/assets/images/title/title11.png": "03d633c533f918510ecf3ee35e58f24b",
"assets/FontManifest.json": "3ba95e877e8d977ed295b7a8efefeff7",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/images/audio_on.png": "68cdff8ed731d72ccbcb8424caefea64",
"assets/images/back.png": "f1c5a51ce9ec39228f99142e35a76c36",
"assets/images/banner/acid%2520Attack.png": "1f2014376fd55385b9439b79e543c06b",
"assets/images/banner/forced%2520derobing.png": "ac0be7d5b65b6cbda6648d7f37bde04d",
"assets/images/banner/forced%2520pornography.png": "cdbc0e0eaa7a7cc9de82cc6762de1e49",
"assets/images/banner/stalking.png": "16e654c5ce10ff412f353e383fe9303c",
"assets/images/banner/unwanted%2520Sexual%2520Advances.png": "8a494fb6a64aa29ef7e854a326bfe4cf",
"assets/images/banner/unwanted_touching.png": "7ec33eb2ee0c331456fd3bb9f0a854f5",
"assets/images/banner/video%2520Without%2520Consent.png": "81f4f6d7e31cf165262ee1230b2951f6",
"assets/images/call.png": "2ded1540155bfd34ef46059cd89e2ad4",
"assets/images/camouflage_icon.png": "5f36a588ea096f36ba1ffd3420c95ab3",
"assets/images/chatbubbles-outline.png": "bdaeff1f87e4083bb31787bed687d645",
"assets/images/close_icon.png": "403af4c8fa414b300bfd3f13a47a8883",
"assets/images/email.png": "a6c6fe08dc4bac4dba49921791849a7a",
"assets/images/english/04-Card-Demonstration.mp4": "f4116cdc4ac38c3a28b76027ca3fbd0d",
"assets/images/english/07-Helplines.mp4": "efb5f9421753c61bfd3e4df4b1cf3930",
"assets/images/english/08-KYR.mp4": "1a93db330df10e32c9c1c2b86f07aeb0",
"assets/images/english/09-Dark-mode.mp4": "d476b4cb13ec1f40747e5ffb293d2f7a",
"assets/images/english/1.jpg": "3cba49ac1b0acbeee8a3cb941ddb7883",
"assets/images/english/11-Help.mp4": "340242a5f5bd3fa9a5d16c9781c0caf8",
"assets/images/english/12-Ready-to-use.mp4": "7a6fbe1356db38d4c1570c5b01c0f912",
"assets/images/english/2.png": "4427be2ebd2afb1547617ddb48f7352c",
"assets/images/english/3-Help-Centre.mp4": "5602c889ab5fff87967613aec750d984",
"assets/images/english/audio_1.mp4": "2623a252469c94a1dbf357344710a5f3",
"assets/images/english/back.mp4": "5486e7f70b2f107be7e85ae842a0874b",
"assets/images/english/Map.mp4": "9979dcf79c85b5fd708ab5f9399747dd",
"assets/images/english/Menu.mp4": "0269a7a292b725ce9470fce4b13a2aa6",
"assets/images/hand_icon.png": "7f34d4492edc53520a9adb474349a207",
"assets/images/help.png": "7bcf0fabcbee90d6fcddfb568d4f2245",
"assets/images/helplines.png": "96f9be18a2b1815dbf227f67f1a95cbb",
"assets/images/hindi/04-Card-Demonstration_hindi.mp4": "445a74f35a96c95cd9f876e456be83e6",
"assets/images/hindi/06-Map_hindi.mp4": "f98e725d61727062f119752a0a906f82",
"assets/images/hindi/07-Helplines_hindi.mp4": "cb0f521db411498ef80a926639d9cb87",
"assets/images/hindi/08-KYR_1_hindi.mp4": "54fd3a5c376a080299faad30b49eab69",
"assets/images/hindi/09-Dark-mode_hindi.mp4": "09e3845a2c914ff29490a470b665637d",
"assets/images/hindi/1.jpg": "b8f8390a469aaa1f6f0d156ebf37a04b",
"assets/images/hindi/10-Menu_hindi.mp4": "08c97a23b98e927da37f5c5e9a1dc1d5",
"assets/images/hindi/11-Help_hindi.mp4": "c2dd6d9895a66c2017fd3df3999f58d6",
"assets/images/hindi/12-Ready-to-use_hindi.mp4": "d964832ff85dd8ab27efce4c86415da7",
"assets/images/hindi/2-Audio_hindi.mp4": "59ade8a6d2ea136dc9ec6b9887fe8b6d",
"assets/images/hindi/2.png": "c1cb1fe972ddb11ac15ece1d6038da0d",
"assets/images/hindi/3-Help-Centre_hindi_1.mp4": "85a19fbb02904b501534953955fa39a9",
"assets/images/hindi/5-back_hindi.mp4": "b7e3f433410d447de31b11316a856ecc",
"assets/images/Icon-health-camo.png": "4d96fd0ed0e577f93cd2fd9970e8a6eb",
"assets/images/Icon-health.png": "7f387ae6bd0f69ab4afa22435bd1b7d2",
"assets/images/Icon-legal.png": "fe838392ff0a32f15fbc64f9ca2c9c90",
"assets/images/Icon-support-camo.png": "35a39179e082da3d3f9e766edf749941",
"assets/images/Icon-Support.png": "43593f4c7dcf05948b71bc745a0a4689",
"assets/images/Icon_No%2520Results%25201.png": "2de1b6c9d675f9a227c17e8bbacfb1a9",
"assets/images/id1.png": "22b23aa1dec6f41e364a6f08d6730e3d",
"assets/images/id2.png": "a4f1ee25c0c0e48a76018a11f88fcc4b",
"assets/images/image1.png": "6c4069eefa4cc94ac7fb2d6ea43016c5",
"assets/images/image2.gif": "c30c56c2e21a8fc9c0547308fe2b31a9",
"assets/images/image3.gif": "275145ecd71bb50cd55f6998324837c9",
"assets/images/know_your_rights/commercial.png": "908980c2edff29ddbeeb0d849c88b0a4",
"assets/images/know_your_rights/consent.png": "0fedaae0ae4e65e25357ad3c44fc2d55",
"assets/images/know_your_rights/domestic.png": "49bffc73d282c6dcb153711bfd037711",
"assets/images/know_your_rights/dowry.png": "6fe30da4ddead3866a7054b868f348e2",
"assets/images/know_your_rights/forced.png": "a0421b1187bc2698fd30ebba7c3c7a8d",
"assets/images/know_your_rights/gender_based.png": "44b15e6180237ce36c71402a869180f3",
"assets/images/know_your_rights/other_forms.png": "46031f22fab6cf054f2f06811a696b42",
"assets/images/know_your_rights/rape.png": "60f67a473af202a8813b4ef07c44d604",
"assets/images/know_your_rights/workplace.png": "6cef665a80d45b78f0031b64fea79f5e",
"assets/images/legal.png": "267d8b6d997abd2b07e612be3c9d5dc2",
"assets/images/location_icon.png": "f454db4fc6478cc807f100c393e81961",
"assets/images/logo.png": "659fe3953b0b67082246b8d4a0502df9",
"assets/images/map_style.txt": "5000cfac0a53e7da5762ac0f4bb21a85",
"assets/images/marker_green.png": "4fe01dc5ea75373a0cbdfa797b6968bc",
"assets/images/marker_red.png": "44884cf79669a354e3168266f7dfd969",
"assets/images/marker_yellow.png": "1ae567a9ab80c09b14c8c2288268ea72",
"assets/images/medical.png": "c09337f5c5cb316f82e2c4cdae96ca31",
"assets/images/medical2.png": "15bf1e21085dc7fe3c75a3e640e79896",
"assets/images/mute_icon.png": "6837dd31d6dc3dded6d73a2a179e9510",
"assets/images/next.png": "951ca6723bd9f0008e8e739d93cc8bac",
"assets/images/No%2520Results.png": "cd9ee8f8322250dc575a3791eb818a2d",
"assets/images/otp_icon1.png": "f7948469c2dbae4ab032c9f3295eba40",
"assets/images/otp_icon2.png": "c974821900e3d8f1c31c388738125c1a",
"assets/images/path-front.png": "b2e5d590330189297702ace4432b85ea",
"assets/images/play-circle-outline.png": "c71c72a5b48f189cbb416f5a2dab9622",
"assets/images/questionmark.png": "68b24bc637b4c5988939440e8a48dc3f",
"assets/images/share.png": "53b5c6306eaadf5e052d274d0dc9d106",
"assets/images/splashlogo.png": "236967a7328444fc12fa6cd4657771e0",
"assets/images/support.png": "8dcc37974b1d97a88beea819062fd47b",
"assets/images/support1.png": "cf1488e17d95ff27cbe4afc8a5fded9e",
"assets/images/talika.png": "4bd735e18aed8a5e9e06e7efd333cef9",
"assets/images/talika_animation.gif": "6955333b90d31cee162a90138133a7bc",
"assets/images/tile_icon.png": "47aee2eaa06c661761624d7547ab3430",
"assets/images/Under%2520Construction_text.png": "1261ae651b81a6c77a176bcff040a555",
"assets/images/under_construction.png": "2c174735bd39ba89d87c10a968b82975",
"assets/images/user.png": "e60cde75c12e908aed82fcca13acfc67",
"assets/NOTICES": "aef6c20405469dbbe7c852d2226727e8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "63ed15a95f3bd2ec1aac5b30560f04ec",
"/": "63ed15a95f3bd2ec1aac5b30560f04ec",
"main.dart.js": "c8c07dde60f961750e0f8167dc123348",
"manifest.json": "e6ee004996ecdad0dd5c6e691b03626d",
"version.json": "75b9cce11c58b8a513f1847cc220bf02"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
