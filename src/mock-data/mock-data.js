/* eslint-disable */

export const mockUser = {
  name: 'Pat',
  id: 12,
  token:"2y589wyhgfiouqehr8to8"
}

export const mockUserInfo = {
  firstname: 'Pat',
  lastname: 'McLaughlin',
  city: 'Denver',
  state: 'Colorado',
  profile_medium: 'image url'
}

export const mockReturnUser = {
  email: 'pat@askjeeves.com',
  password: 'password'
}

export const mockNewUser = {
  name: 'Pat',
  email: 'pat@askjeeves.com',
  password: 'password'
}

export const mockRide = {
  "epoch": "776232323",
  "distance": "2",
  "elapsedTime": "120",
  "date": "May 8th, 2017",
  "trailName": "lame",
  "location": "park",
  "difficulty": "green",
  "img": "someurlthing",
  "summary": "not sendy",
  "userId": "9"
}

export const mockRides = [
{
  "epoch": "776232323",
  "distance": "2",
  "elapsedTime": "120",
  "date": "May 8th, 2017",
  "trailName": "lame",
  "location": "park",
  "difficulty": "green",
  "img": "someurlthing",
  "summary": "not sendy",
  "userId": "9"
},
{
  "epoch": "776232700",
  "distance": "5",
  "elapsedTime": "180",
  "date": "May 14th, 2017",
  "trailName": "neat",
  "location": "hill",
  "difficulty": "blue",
  "img": "someurlthing",
  "summary": "sendy",
  "userId": "9"
}
]



export const mockStravaUser = {
  "id" : 1234567890987654321,
  "username" : "marianne_v",
  "resource_state" : 3,
  "firstname" : "Marianne",
  "lastname" : "V.",
  "city" : "San Francisco",
  "state" : "CA",
  "country" : "US",
  "sex" : "F",
  "premium" : true,
  "created_at" : "2017-11-14T02:30:05Z",
  "updated_at" : "2018-02-06T19:32:20Z",
  "badge_type_id" : 4,
  "profile_medium" : "https://xxxxxx.cloudfront.net/pictures/athletes/123456789/123456789/2/medium.jpg",
  "profile" : "https://xxxxx.cloudfront.net/pictures/athletes/123456789/123456789/2/large.jpg",
  "friend" : null,
  "follower" : null,
  "email" : "mv@abc.com",
  "follower_count" : 5,
  "friend_count" : 5,
  "mutual_friend_count" : 0,
  "athlete_type" : 1,
  "date_preference" : "%m/%d/%Y",
  "measurement_preference" : "feet",
  "clubs" : [ ],
  "ftp" : null,
  "weight" : 0,
  "bikes" : [ {
    "id" : "b12345678987655",
    "primary" : true,
    "name" : "EMC",
    "resource_state" : 2,
    "distance" : 0
  } ],
  "shoes" : [ {
    "id" : "g12345678987655",
    "primary" : true,
    "name" : "adidas",
    "resource_state" : 2,
    "distance" : 4904
  } ]
}

export const mockTrail = {
  "trails": [
    {
      "id": 46286,
      "name": "Betasso Preserve",
      "type": "Featured Ride",
      "summary": "A solid ride close to Boulder that is often ridden from town.",
      "difficulty": "greenBlue",
      "stars": 3.9,
      "starVotes": 154,
      "location": "Boulder, Colorado",
      "url": "https:\/\/www.mtbproject.com\/trail\/46286\/betasso-preserve",
      "imgSqSmall": "https:\/\/cdn-files.apstatic.com\/mtb\/7002944_sqsmall_1433864122.jpg",
      "imgSmall": "https:\/\/cdn-files.apstatic.com\/mtb\/7002944_small_1433864122.jpg",
      "imgSmallMed": "https:\/\/cdn-files.apstatic.com\/mtb\/7002944_smallMed_1433864122.jpg",
      "imgMedium": "https:\/\/cdn-files.apstatic.com\/mtb\/7002944_medium_1433864122.jpg",
      "length": 7.4,
      "ascent": 829,
      "descent": -829,
      "high": 6589,
      "low": 6178,
      "longitude": -105.3422,
      "latitude": 40.0155,
      "conditionStatus": "All Clear",
      "conditionDetails": "Mostly Dry: Today at 5pm. Besides the 2 river crossing where there is normally a little mud, there was only one small area of mud.",
      "conditionDate": "2018-03-25 23:08:01"
    },
    {
      "id": 601365,
      "name": "Walker Ranch",
      "type": "Featured Ride",
      "summary": "A classic loop near boulder with a nice mix of technical riding, flowy descents, and scenery.",
      "difficulty": "blueBlack",
      "stars": 3.9,
      "starVotes": 136,
      "location": "Coal Creek, Colorado",
      "url": "https:\/\/www.mtbproject.com\/trail\/601365\/walker-ranch",
      "imgSqSmall": "https:\/\/img.youtube.com\/vi\/V9xxv387CxI\/hqdefault.jpg",
      "imgSmall": "https:\/\/img.youtube.com\/vi\/V9xxv387CxI\/hqdefault.jpg",
      "imgSmallMed": "https:\/\/img.youtube.com\/vi\/V9xxv387CxI\/hqdefault.jpg",
      "imgMedium": "https:\/\/img.youtube.com\/vi\/V9xxv387CxI\/hqdefault.jpg",
      "length": 7.8,
      "ascent": 1516,
      "descent": -1510,
      "high": 7335,
      "low": 6446,
      "longitude": -105.3376,
      "latitude": 39.9511,
      "conditionStatus": "Bad \/ Closed",
      "conditionDetails": "Snowy, Icy: Dylan - its almost as if the trails get worse after a storm! What a concept...",
      "conditionDate": "2018-03-21 15:10:47"
    }
  ],
  "success":1
}

export const mockUserActivityLog = [{
  "id" : 12345678987654321,
  "resource_state" : 3,
  "external_id" : "garmin_push_12345678987654321",
  "upload_id" : 98765432123456789,
  "athlete" : {
    "id" : 134815,
    "resource_state" : 1
  },
  "name" : "Happy Friday",
  "distance" : 28099,
  "moving_time" : 4207,
  "elapsed_time" : 4410,
  "total_elevation_gain" : 516,
  "type" : "Ride",
  "start_date" : "2018-02-16T14:52:54Z",
  "start_date_local" : "2018-02-16T06:52:54Z",
  "timezone" : "(GMT-08:00) America/Los_Angeles",
  "utc_offset" : -28800,
  "start_latlng" : [ 37.83, -122.26 ],
  "end_latlng" : [ 37.83, -122.26 ],
  "location_city" : null,
  "location_state" : null,
  "location_country" : "United States",
  "start_latitude" : 37.83,
  "start_longitude" : -122.26,
  "achievement_count" : 0,
  "kudos_count" : 19,
  "comment_count" : 0,
  "athlete_count" : 1,
  "photo_count" : 0,
  "map" : {
    "id" : "a1410355832",
    "polyline" : "ki{eFvqfiVqAWQIGEEKAYJgBVqDJ{BHa@jAkNJw@Pw@V{APs@^aABQAOEQGKoJ_FuJkFqAo@{A}@sH{DiAs@Q]?WVy@`@oBt@_CB]KYMMkB{AQEI@WT{BlE{@zAQPI@ICsCqA_BcAeCmAaFmCqIoEcLeG}KcG}A}@cDaBiDsByAkAuBqBi@y@_@o@o@kB}BgIoA_EUkAMcACa@BeBBq@LaAJe@b@uA`@_AdBcD`@iAPq@RgALqAB{@EqAyAoOCy@AmCBmANqBLqAZkB\\iCPiBJwCCsASiCq@iD]eA]y@[i@w@mAa@i@k@g@kAw@i@Ya@Q]EWFMLa@~BYpAFNpA`Aj@n@X`@V`AHh@JfB@xAMvAGZGHIDIAWOEQNcC@sACYK[MSOMe@QKKKYOs@UYQISCQ?Q@WNo@r@OHGAGCKOQ_BU}@MQGG]Io@@c@FYNg@d@s@d@ODQAMOMaASs@_@a@SESAQDqBn@a@RO?KK?UBU\\kA@Y?WMo@Iy@GWQ_@WSSGg@AkABQB_Ap@_A^o@b@Q@o@IS@OHi@n@OFS?OI}@iAQMQGQC}@DOIIUK{@IUOMyBo@kASOKIQCa@L[|AgATWN[He@?QKw@FOPCh@Fx@l@TDLELKl@aAHIJEX@r@ZTDV@LENQVg@RkA@c@MeA?WFOPMf@Ej@Fj@@LGHKDM?_@_@iC?a@HKRIl@NT?FCHMFW?YEYGWQa@GYBiAIq@Gq@L_BHSHK|@WJETSLQZs@z@_A~@uA^U`@G\\CRB\\Tl@p@Th@JZ^bB`@lAHLXVLDP?LGFSKiDBo@d@wBVi@R]VYVE\\@`@Lh@Fh@CzAk@RSDQA]GYe@eAGWSiBAWBWBIJORK`@KPOPSTg@h@}Ad@o@F[E_@EGMKUGmAEYGMIMYKs@?a@J}@@_BD_@HQJMx@e@LKHKHWAo@UoAAWFmAH}@?w@C[YwAAc@HSNM|Ao@rA}@zAq@`@a@j@eAxAuBXQj@MXSR[b@gAFg@?YISOGaAHi@Xw@v@_@d@WRSFqARUHQJc@d@m@`A[VSFUBcAEU@WFULUPa@v@Y~@UrBc@dBI~@?l@P~ABt@N`HEjA]zAEp@@p@TrBCl@CTQb@k@dAg@jAU^KJYLK@k@A[Js@d@a@b@]RgBl@[FMAw@[]G]?m@D_@F]P[Vu@t@[TMF_@Do@E_@@q@P]PWZUZw@vAkAlAGJOj@IlAMd@OR{@p@a@d@sBpD]v@a@`Aa@n@]TODgBVk@Pe@^cBfBc@Rs@La@RSPm@|@wCpDS^Wp@QZML{@l@qBbCYd@k@lAIVCZBZNTr@`@RRHZANIZQPKDW@e@CaASU?I@YTKRQx@@\\VmALYRQLCL?v@P|@D\\GJEFKDM@OCa@COOYIGm@YMUCM@]JYr@uAx@kAt@}@jAeAPWbAkBj@s@bAiAz@oAj@m@VQlAc@VQ~@aA`Au@p@Q`AIv@MZORUV_@p@iB|AoCh@q@dAaANUNWH[N{AJ[^m@t@_Av@wA\\a@`@W`@In@Al@B^E`@Wl@u@\\[VQ\\K`@Eb@?R@dAZP@d@CRExAs@\\Yt@{@LG\\MjAATINOXo@d@kAl@_AHYBOCe@QiBCm@Fq@\\wADo@AyGEeBWuB@YHu@Tu@Lk@VcCTo@d@aA\\WJE`@G~@FP?VI\\U~@sANO`@SfAMj@U\\WjAsAXS`@UNENALBHFFL?^Ml@Uj@]b@q@RUJSPkChEc@XcAb@sA|@]PaA\\OJKNER?TDTNj@Jn@?p@OfC@ZR`B@VCV_@n@{@l@WbACv@OlABnAPl@LNNHbBBNBLFFJ@^GLg@x@i@|AMP[X}@XOJKPET?l@LhAFXp@fBDRCd@S\\_@Ps@PQ@}A]S?QDe@V]b@MR[fAKt@ErAF~CANILYDKGIKe@{@Yy@e@sB[gA[c@e@YUCU?WBUHUNQPq@`AiArAMV[^e@Zc@JQJKNMz@?r@Bb@PfAAfA@VVbADn@E`@KHSEe@SMAKDKFM\\^dDCh@m@LoAQ_@@MFOZLfBEl@QbASd@KLQBOAaAc@QAQ@QHc@v@ONMJOBOCg@c@]O[EMBKFGL?RHv@ARERGNe@h@{@h@WVGNDt@JLNFPFz@LdBf@f@PJNHPF`ADPJJJDl@I`@B^Tp@bALJNDNALIf@i@PGPCt@DNE`@Uv@[dAw@RITGRCtAARBPJLPJRZxB?VEX_@vAAR?RDNHJJBh@UnBm@h@IRDRJNNJPNbBFRJLLBLCzAmAd@Uf@Gf@?P@PFJNHPFTH`BDTHNJJJ@LG`@m@^YPER@RDPHNNJRLn@HRLN^VNPHTFX@\\UlDFb@FHh@NP@HKPsB?}ASkCQ{@[y@q@}@cA{@KOCQDa@t@{CFGJCf@Nl@ZtA~@r@p@`@h@rAxBd@rA\\fARdAPjANrB?f@AtBCd@QfBkAjJOlBChA?rBFrBNlBdAfKFzAC~@Iz@Mz@Sv@s@jBmAxBi@hAWt@Sv@Qx@O`BA`@?dAPfBVpAd@`BfBlFf@fBdA~Cr@pAz@fApBhBjAt@H?IL?FBFJLx@^lHvDvh@~XnElCbAd@pGhDbAb@nAr@`Ad@`GhDnBbAxCbBrWhNJJDPARGP_@t@Qh@]pAUtAoA`Ny@jJApBBNFLJFJBv@Hb@HBF?\\",
    "resource_state" : 3,
    "summary_polyline" : "ki{eFvqfiVsBmA`Feh@qg@iX`B}JeCcCqGjIq~@kf@cM{KeHeX`@_GdGkSeBiXtB}YuEkPwFyDeAzAe@pC~DfGc@bIOsGmCcEiD~@oBuEkFhBcBmDiEfAVuDiAuD}NnDaNiIlCyDD_CtJKv@wGhD]YyEzBo@g@uKxGmHpCGtEtI~AuLrHkAcAaIvEgH_EaDR_FpBuBg@sNxHqEtHgLoTpIiCzKNr[sB|Es\\`JyObYeMbGsMnPsAfDxAnD}DBu@bCx@{BbEEyAoD`AmChNoQzMoGhOwX|[yIzBeFKg[zAkIdU_LiHxK}HzEh@vM_BtBg@xGzDbCcF~GhArHaIfByAhLsDiJuC?_HbHd@nL_Cz@ZnEkDDy@hHwJLiCbIrNrIvN_EfAjDWlEnEiAfBxDlFkBfBtEfDaAzBvDKdFx@|@XgJmDsHhAgD`GfElEzOwBnYdBxXgGlSc@bGdHpW|HdJztBnhAgFxc@HnCvBdA"
  },
  "trainer" : false,
  "commute" : false,
  "manual" : false,
  "private" : false,
  "flagged" : false,
  "gear_id" : "b12345678987654321",
  "from_accepted_tag" : false,
  "average_speed" : 6.679,
  "max_speed" : 18.5,
  "average_cadence" : 78.5,
  "average_temp" : 4,
  "average_watts" : 185.5,
  "weighted_average_watts" : 230,
  "kilojoules" : 780.5,
  "device_watts" : true,
  "has_heartrate" : false,
  "max_watts" : 743,
  "elev_high" : 446.6,
  "elev_low" : 17.2,
  "pr_count" : 0,
  "total_photo_count" : 2,
  "has_kudoed" : false,
  "workout_type" : 10,
  "suffer_score" : null,
  "description" : "",
  "calories" : 870.2,
  "segment_efforts" : [ {
    "id" : 12345678987654321,
    "resource_state" : 2,
    "name" : "Tunnel Rd.",
    "activity" : {
      "id" : 12345678987654321,
      "resource_state" : 1
    },
    "athlete" : {
      "id" : 12345678987654321,
      "resource_state" : 1
    },
    "elapsed_time" : 2038,
    "moving_time" : 2038,
    "start_date" : "2018-02-16T14:56:25Z",
    "start_date_local" : "2018-02-16T06:56:25Z",
    "distance" : 9434.8,
    "start_index" : 211,
    "end_index" : 2246,
    "average_cadence" : 78.6,
    "device_watts" : true,
    "average_watts" : 237.6,
    "segment" : {
      "id" : 673683,
      "resource_state" : 2,
      "name" : "Tunnel Rd.",
      "activity_type" : "Ride",
      "distance" : 9220.7,
      "average_grade" : 4.2,
      "maximum_grade" : 25.8,
      "elevation_high" : 426.5,
      "elevation_low" : 43.4,
      "start_latlng" : [ 37.8346153, -122.2520872 ],
      "end_latlng" : [ 37.8476261, -122.2008944 ],
      "start_latitude" : 37.8346153,
      "start_longitude" : -122.2520872,
      "end_latitude" : 37.8476261,
      "end_longitude" : -122.2008944,
      "climb_category" : 3,
      "city" : "Oakland",
      "state" : "CA",
      "country" : "United States",
      "private" : false,
      "hazardous" : false,
      "starred" : false
    },
    "kom_rank" : null,
    "pr_rank" : null,
    "achievements" : [ ],
    "hidden" : false
  } ],
  "splits_metric" : [ {
    "distance" : 1001.5,
    "elapsed_time" : 141,
    "elevation_difference" : 4.4,
    "moving_time" : 141,
    "split" : 1,
    "average_speed" : 7.1,
    "pace_zone" : 0
  } ],
  "laps" : [ {
    "id" : 4479306946,
    "resource_state" : 2,
    "name" : "Lap 1",
    "activity" : {
      "id" : 1410355832,
      "resource_state" : 1
    },
    "athlete" : {
      "id" : 134815,
      "resource_state" : 1
    },
    "elapsed_time" : 1573,
    "moving_time" : 1569,
    "start_date" : "2018-02-16T14:52:54Z",
    "start_date_local" : "2018-02-16T06:52:54Z",
    "distance" : 8046.72,
    "start_index" : 0,
    "end_index" : 1570,
    "total_elevation_gain" : 276,
    "average_speed" : 5.12,
    "max_speed" : 9.5,
    "average_cadence" : 78.6,
    "device_watts" : true,
    "average_watts" : 233.1,
    "lap_index" : 1,
    "split" : 1
  } ],
  "gear" : {
    "id" : "b12345678987654321",
    "primary" : true,
    "name" : "Tarmac",
    "resource_state" : 2,
    "distance" : 32547610
  },
  "partner_brand_tag" : null,
  "photos" : {
    "primary" : {
      "id" : null,
      "unique_id" : "3FDGKL3-204E-4867-9E8D-89FC79EAAE17",
      "urls" : {
        "100" : "https://dgtzuqphqg23d.cloudfront.net/Bv93zv5t_mr57v0wXFbY_JyvtucgmU5Ym6N9z_bKeUI-128x96.jpg",
        "600" : "https://dgtzuqphqg23d.cloudfront.net/Bv93zv5t_mr57v0wXFbY_JyvtucgmU5Ym6N9z_bKeUI-768x576.jpg"
      },
      "source" : 1
    },
    "use_primary_photo" : true,
    "count" : 2
  },
  "highlighted_kudosers" : [ {
    "destination_url" : "strava://athletes/12345678987654321",
    "display_name" : "Marianne V.",
    "avatar_url" : "https://dgalywyr863hv.cloudfront.net/pictures/athletes/12345678987654321/12345678987654321/3/medium.jpg",
    "show_name" : true
  } ],
  "device_name" : "Garmin Edge 1030",
  "embed_token" : "18e4615989b47dd4ff3dc711b0aa4502e4b311a9",
  "segment_leaderboard_opt_out" : false,
  "leaderboard_opt_out" : false
},
{
  "id" : 12345678987654321,
  "resource_state" : 3,
  "external_id" : "garmin_push_12345678987654321",
  "upload_id" : 98765432123456789,
  "athlete" : {
    "id" : 134815,
    "resource_state" : 1
  },
  "name" : "Happy Friday",
  "distance" : 28099,
  "moving_time" : 4207,
  "elapsed_time" : 4410,
  "total_elevation_gain" : 516,
  "type" : "Run",
  "start_date" : "2018-02-16T14:52:54Z",
  "start_date_local" : "2018-02-16T06:52:54Z",
  "timezone" : "(GMT-08:00) America/Los_Angeles",
  "utc_offset" : -28800,
  "start_latlng" : [ 37.83, -122.26 ],
  "end_latlng" : [ 37.83, -122.26 ],
  "location_city" : null,
  "location_state" : null,
  "location_country" : "United States",
  "start_latitude" : 37.83,
  "start_longitude" : -122.26,
  "achievement_count" : 0,
  "kudos_count" : 19,
  "comment_count" : 0,
  "athlete_count" : 1,
  "photo_count" : 0,
  "map" : {
    "id" : "a1410355832",
    "polyline" : "ki{eFvqfiVqAWQIGEEKAYJgBVqDJ{BHa@jAkNJw@Pw@V{APs@^aABQAOEQGKoJ_FuJkFqAo@{A}@sH{DiAs@Q]?WVy@`@oBt@_CB]KYMMkB{AQEI@WT{BlE{@zAQPI@ICsCqA_BcAeCmAaFmCqIoEcLeG}KcG}A}@cDaBiDsByAkAuBqBi@y@_@o@o@kB}BgIoA_EUkAMcACa@BeBBq@LaAJe@b@uA`@_AdBcD`@iAPq@RgALqAB{@EqAyAoOCy@AmCBmANqBLqAZkB\\iCPiBJwCCsASiCq@iD]eA]y@[i@w@mAa@i@k@g@kAw@i@Ya@Q]EWFMLa@~BYpAFNpA`Aj@n@X`@V`AHh@JfB@xAMvAGZGHIDIAWOEQNcC@sACYK[MSOMe@QKKKYOs@UYQISCQ?Q@WNo@r@OHGAGCKOQ_BU}@MQGG]Io@@c@FYNg@d@s@d@ODQAMOMaASs@_@a@SESAQDqBn@a@RO?KK?UBU\\kA@Y?WMo@Iy@GWQ_@WSSGg@AkABQB_Ap@_A^o@b@Q@o@IS@OHi@n@OFS?OI}@iAQMQGQC}@DOIIUK{@IUOMyBo@kASOKIQCa@L[|AgATWN[He@?QKw@FOPCh@Fx@l@TDLELKl@aAHIJEX@r@ZTDV@LENQVg@RkA@c@MeA?WFOPMf@Ej@Fj@@LGHKDM?_@_@iC?a@HKRIl@NT?FCHMFW?YEYGWQa@GYBiAIq@Gq@L_BHSHK|@WJETSLQZs@z@_A~@uA^U`@G\\CRB\\Tl@p@Th@JZ^bB`@lAHLXVLDP?LGFSKiDBo@d@wBVi@R]VYVE\\@`@Lh@Fh@CzAk@RSDQA]GYe@eAGWSiBAWBWBIJORK`@KPOPSTg@h@}Ad@o@F[E_@EGMKUGmAEYGMIMYKs@?a@J}@@_BD_@HQJMx@e@LKHKHWAo@UoAAWFmAH}@?w@C[YwAAc@HSNM|Ao@rA}@zAq@`@a@j@eAxAuBXQj@MXSR[b@gAFg@?YISOGaAHi@Xw@v@_@d@WRSFqARUHQJc@d@m@`A[VSFUBcAEU@WFULUPa@v@Y~@UrBc@dBI~@?l@P~ABt@N`HEjA]zAEp@@p@TrBCl@CTQb@k@dAg@jAU^KJYLK@k@A[Js@d@a@b@]RgBl@[FMAw@[]G]?m@D_@F]P[Vu@t@[TMF_@Do@E_@@q@P]PWZUZw@vAkAlAGJOj@IlAMd@OR{@p@a@d@sBpD]v@a@`Aa@n@]TODgBVk@Pe@^cBfBc@Rs@La@RSPm@|@wCpDS^Wp@QZML{@l@qBbCYd@k@lAIVCZBZNTr@`@RRHZANIZQPKDW@e@CaASU?I@YTKRQx@@\\VmALYRQLCL?v@P|@D\\GJEFKDM@OCa@COOYIGm@YMUCM@]JYr@uAx@kAt@}@jAeAPWbAkBj@s@bAiAz@oAj@m@VQlAc@VQ~@aA`Au@p@Q`AIv@MZORUV_@p@iB|AoCh@q@dAaANUNWH[N{AJ[^m@t@_Av@wA\\a@`@W`@In@Al@B^E`@Wl@u@\\[VQ\\K`@Eb@?R@dAZP@d@CRExAs@\\Yt@{@LG\\MjAATINOXo@d@kAl@_AHYBOCe@QiBCm@Fq@\\wADo@AyGEeBWuB@YHu@Tu@Lk@VcCTo@d@aA\\WJE`@G~@FP?VI\\U~@sANO`@SfAMj@U\\WjAsAXS`@UNENALBHFFL?^Ml@Uj@]b@q@RUJSPkChEc@XcAb@sA|@]PaA\\OJKNER?TDTNj@Jn@?p@OfC@ZR`B@VCV_@n@{@l@WbACv@OlABnAPl@LNNHbBBNBLFFJ@^GLg@x@i@|AMP[X}@XOJKPET?l@LhAFXp@fBDRCd@S\\_@Ps@PQ@}A]S?QDe@V]b@MR[fAKt@ErAF~CANILYDKGIKe@{@Yy@e@sB[gA[c@e@YUCU?WBUHUNQPq@`AiArAMV[^e@Zc@JQJKNMz@?r@Bb@PfAAfA@VVbADn@E`@KHSEe@SMAKDKFM\\^dDCh@m@LoAQ_@@MFOZLfBEl@QbASd@KLQBOAaAc@QAQ@QHc@v@ONMJOBOCg@c@]O[EMBKFGL?RHv@ARERGNe@h@{@h@WVGNDt@JLNFPFz@LdBf@f@PJNHPF`ADPJJJDl@I`@B^Tp@bALJNDNALIf@i@PGPCt@DNE`@Uv@[dAw@RITGRCtAARBPJLPJRZxB?VEX_@vAAR?RDNHJJBh@UnBm@h@IRDRJNNJPNbBFRJLLBLCzAmAd@Uf@Gf@?P@PFJNHPFTH`BDTHNJJJ@LG`@m@^YPER@RDPHNNJRLn@HRLN^VNPHTFX@\\UlDFb@FHh@NP@HKPsB?}ASkCQ{@[y@q@}@cA{@KOCQDa@t@{CFGJCf@Nl@ZtA~@r@p@`@h@rAxBd@rA\\fARdAPjANrB?f@AtBCd@QfBkAjJOlBChA?rBFrBNlBdAfKFzAC~@Iz@Mz@Sv@s@jBmAxBi@hAWt@Sv@Qx@O`BA`@?dAPfBVpAd@`BfBlFf@fBdA~Cr@pAz@fApBhBjAt@H?IL?FBFJLx@^lHvDvh@~XnElCbAd@pGhDbAb@nAr@`Ad@`GhDnBbAxCbBrWhNJJDPARGP_@t@Qh@]pAUtAoA`Ny@jJApBBNFLJFJBv@Hb@HBF?\\",
    "resource_state" : 3,
    "summary_polyline" : "ki{eFvqfiVsBmA`Feh@qg@iX`B}JeCcCqGjIq~@kf@cM{KeHeX`@_GdGkSeBiXtB}YuEkPwFyDeAzAe@pC~DfGc@bIOsGmCcEiD~@oBuEkFhBcBmDiEfAVuDiAuD}NnDaNiIlCyDD_CtJKv@wGhD]YyEzBo@g@uKxGmHpCGtEtI~AuLrHkAcAaIvEgH_EaDR_FpBuBg@sNxHqEtHgLoTpIiCzKNr[sB|Es\\`JyObYeMbGsMnPsAfDxAnD}DBu@bCx@{BbEEyAoD`AmChNoQzMoGhOwX|[yIzBeFKg[zAkIdU_LiHxK}HzEh@vM_BtBg@xGzDbCcF~GhArHaIfByAhLsDiJuC?_HbHd@nL_Cz@ZnEkDDy@hHwJLiCbIrNrIvN_EfAjDWlEnEiAfBxDlFkBfBtEfDaAzBvDKdFx@|@XgJmDsHhAgD`GfElEzOwBnYdBxXgGlSc@bGdHpW|HdJztBnhAgFxc@HnCvBdA"
  },
  "trainer" : false,
  "commute" : false,
  "manual" : false,
  "private" : false,
  "flagged" : false,
  "gear_id" : "b12345678987654321",
  "from_accepted_tag" : false,
  "average_speed" : 6.679,
  "max_speed" : 18.5,
  "average_cadence" : 78.5,
  "average_temp" : 4,
  "average_watts" : 185.5,
  "weighted_average_watts" : 230,
  "kilojoules" : 780.5,
  "device_watts" : true,
  "has_heartrate" : false,
  "max_watts" : 743,
  "elev_high" : 446.6,
  "elev_low" : 17.2,
  "pr_count" : 0,
  "total_photo_count" : 2,
  "has_kudoed" : false,
  "workout_type" : 10,
  "suffer_score" : null,
  "description" : "",
  "calories" : 870.2,
  "segment_efforts" : [ {
    "id" : 12345678987654321,
    "resource_state" : 2,
    "name" : "Tunnel Rd.",
    "activity" : {
      "id" : 12345678987654321,
      "resource_state" : 1
    },
    "athlete" : {
      "id" : 12345678987654321,
      "resource_state" : 1
    },
    "elapsed_time" : 2038,
    "moving_time" : 2038,
    "start_date" : "2018-02-16T14:56:25Z",
    "start_date_local" : "2018-02-16T06:56:25Z",
    "distance" : 9434.8,
    "start_index" : 211,
    "end_index" : 2246,
    "average_cadence" : 78.6,
    "device_watts" : true,
    "average_watts" : 237.6,
    "segment" : {
      "id" : 673683,
      "resource_state" : 2,
      "name" : "Tunnel Rd.",
      "activity_type" : "Ride",
      "distance" : 9220.7,
      "average_grade" : 4.2,
      "maximum_grade" : 25.8,
      "elevation_high" : 426.5,
      "elevation_low" : 43.4,
      "start_latlng" : [ 37.8346153, -122.2520872 ],
      "end_latlng" : [ 37.8476261, -122.2008944 ],
      "start_latitude" : 37.8346153,
      "start_longitude" : -122.2520872,
      "end_latitude" : 37.8476261,
      "end_longitude" : -122.2008944,
      "climb_category" : 3,
      "city" : "Oakland",
      "state" : "CA",
      "country" : "United States",
      "private" : false,
      "hazardous" : false,
      "starred" : false
    },
    "kom_rank" : null,
    "pr_rank" : null,
    "achievements" : [ ],
    "hidden" : false
  } ],
  "splits_metric" : [ {
    "distance" : 1001.5,
    "elapsed_time" : 141,
    "elevation_difference" : 4.4,
    "moving_time" : 141,
    "split" : 1,
    "average_speed" : 7.1,
    "pace_zone" : 0
  } ],
  "laps" : [ {
    "id" : 4479306946,
    "resource_state" : 2,
    "name" : "Lap 1",
    "activity" : {
      "id" : 1410355832,
      "resource_state" : 1
    },
    "athlete" : {
      "id" : 134815,
      "resource_state" : 1
    },
    "elapsed_time" : 1573,
    "moving_time" : 1569,
    "start_date" : "2018-02-16T14:52:54Z",
    "start_date_local" : "2018-02-16T06:52:54Z",
    "distance" : 8046.72,
    "start_index" : 0,
    "end_index" : 1570,
    "total_elevation_gain" : 276,
    "average_speed" : 5.12,
    "max_speed" : 9.5,
    "average_cadence" : 78.6,
    "device_watts" : true,
    "average_watts" : 233.1,
    "lap_index" : 1,
    "split" : 1
  } ],
  "gear" : {
    "id" : "b12345678987654321",
    "primary" : true,
    "name" : "Tarmac",
    "resource_state" : 2,
    "distance" : 32547610
  },
  "partner_brand_tag" : null,
  "photos" : {
    "primary" : {
      "id" : null,
      "unique_id" : "3FDGKL3-204E-4867-9E8D-89FC79EAAE17",
      "urls" : {
        "100" : "https://dgtzuqphqg23d.cloudfront.net/Bv93zv5t_mr57v0wXFbY_JyvtucgmU5Ym6N9z_bKeUI-128x96.jpg",
        "600" : "https://dgtzuqphqg23d.cloudfront.net/Bv93zv5t_mr57v0wXFbY_JyvtucgmU5Ym6N9z_bKeUI-768x576.jpg"
      },
      "source" : 1
    },
    "use_primary_photo" : true,
    "count" : 2
  },
  "highlighted_kudosers" : [ {
    "destination_url" : "strava://athletes/12345678987654321",
    "display_name" : "Marianne V.",
    "avatar_url" : "https://dgalywyr863hv.cloudfront.net/pictures/athletes/12345678987654321/12345678987654321/3/medium.jpg",
    "show_name" : true
  } ],
  "device_name" : "Garmin Edge 1030",
  "embed_token" : "18e4615989b47dd4ff3dc711b0aa4502e4b311a9",
  "segment_leaderboard_opt_out" : false,
  "leaderboard_opt_out" : false
}
];


export const mockActivityAndTrail = {
  ...mockUserActivityLog[0],
  ...mockTrail.trails[0]
};

export const mockRideCleanerReturn = [
  {
    "date": "Fri Feb 16 2018", 
    "difficulty": "greenBlue", 
    "distance": "17 miles", 
    "elapsedTime": "1 hr(s) 13 min(s)", 
    "epoch": 1518792774, 
    "img": "https://cdn-files.apstatic.com/mtb/7002944_smallMed_1433864122.jpg", 
    "location": "Boulder, Colorado", 
    "summary": "A solid ride close to Boulder that is often ridden from town.", 
    "trailName": "Betasso Preserve"
  }
];
