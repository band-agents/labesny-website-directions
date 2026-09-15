(function(){
  "use strict";
  var TH = window.LAB_THEME || {};

  /* ══════════ i18n ══════════ */
  var T = { ar:{
    util:"شحن مجاني لكل طلب فوق <b>20 د.ك</b> · استبدال خلال 14 يوم",
    women:"نساء", men:"رجال", kids:"أطفال", lingerie:"لانجيري", brands:"الماركات",
    sale:"التخفيضات", newIn:"وصل حديثاً", stores:"تواصل معنا", help:"مساعدة",
    searchPh:"بحث", account:"حسابي", saved:"المفضلة", bag:"السلة",
    shopNow:"تسوقي الآن", shopNew:"تسوقي الجديد", shopSale:"خصومات تصل 70%",
    seeAll:"عرض الكل", addBag:"أضيفي للسلة", notify:"أشعريني عند التوفر",
    soldOut:"نفدت الكمية", onlyLeft:"باقي {n} فقط", inStock:"متوفر الآن",
    newTag:"جديد", pickSize:"اختاري المقاس أولاً", added:"أُضيف للسلة",
    savedMsg:"أُضيف للمفضلة", unsaved:"أُزيل من المفضلة",
    completeLook:"أكملي الإطلالة", freeDel:"شحن مجاني",
    searchPlaceholder:"ابحثي عن قطعة أو ماركة…",
    recent:"عمليات البحث الأخيرة", trending:"الأكثر بحثاً", jumpBrand:"انتقلي لماركة",
    grpBrands:"الماركات", grpCats:"الأقسام", grpItems:"القطع",
    noRes:"لا نتائج لـ", noResSub:"جربي اسم ماركة أو قسم.", results:"نتيجة",
    freeShipDone:"الشحن علينا — <b>مجاني</b> لهذا الطلب.",
    freeShipMore:"أضيفي <b>{n} د.ك</b> للحصول على شحن مجاني.",
    subtotal:"المجموع", youSave:"وفّرتِ", delivery:"الشحن", free:"مجاني",
    total:"الإجمالي", checkout:"إتمام الطلب", giftWrap:"تغليف هدية مجاني",
    goesWith:"يكمل الإطلالة", emptyBag:"سلتك فارغة.",
    payLine:"الدفع عند الاستلام · كي نت · فيزا · ماستركارد",
    subd:"تم الاشتراك — كود الخصم في طريقه إليك",
    size:"المقاس", remove:"إزالة", items:"قطعة", filters:"تصفية",
    fAll:"الكل", fDeal:"خصم 50% أو أكثر", kbMove:"↑↓ للتنقل", kbOpen:"↵ للفتح",
    yourBag:"سلتك", allCats:"كل الأقسام", bbHome:"الرئيسية", bbSearch:"بحث", bbShop:"تسوقي",
    shopCat:"تسوقي حسب القسم", topBrands:"ماركاتنا", trendNow:"الأكثر رواجاً",
    lookKick:"أكملي الإطلالة", lookH:"القطع تكمل بعضها", lookCta:"أضيفي الإطلالة كاملة",
    bunKick:"اشتري معاً", bunH:"ثلاث قطع، خصم 12%",
    bunItems:"عدد القطع", bunFull:"السعر الأصلي", bunSave:"وفّرتِ", bunTotal:"الإجمالي",
    bunAdd:"أضيفي الكل للسلة", bunNote:"أزيلي أي قطعة — السعر يتحدث تلقائياً.",
    alsoKick:"مختارة لكِ", alsoH:"قد يعجبكِ أيضاً",
    recKick:"عودي إليها", recH:"شاهدتِها مؤخراً",
    contactKick:"نحن هنا", contactH:"تواصلي معنا",
    hours:"يومياً 9 صباحاً – 9 مساءً", callUs:"اتصلي بنا", emailUs:"راسلينا",
    nlKick:"انضمي", nlH:"خصم 10% على أول طلب",
    nlP:"جديد الوصول كل أسبوع، والتخفيضات قبل الجميع.", nlBtn:"اشتراك",
    nlSmall:"رسالتان شهرياً. يمكنك الإلغاء في أي وقت.",
    ftShop:"تسوقي", ftHelp:"المساعدة", ftCo:"عن لبسني",
    ftTrack:"تتبعي طلبك", ftDelivery:"الشحن", ftReturns:"الاستبدال والإرجاع",
    ftSize:"دليل المقاسات", ftContact:"اتصلي بنا", ftAboutUs:"من نحن",
    ftTerms:"الشروط", ftPrivacy:"الخصوصية", ftAbout:"12 ماركة عالمية للنساء والرجال والأطفال، في الكويت.",
    payH:"طرق الدفع", payCod:"الدفع عند الاستلام",
    tr1:"شحن مجاني فوق 20 د.ك", tr2:"استبدال خلال 14 يوم",
    tr3:"الدفع عند الاستلام", tr4:"ماركات أصلية 100%"
  }};
  var LANG = "en";
  function t(k, fb){ if (LANG === "en") return fb; var v = T.ar[k]; return v === undefined ? fb : v; }
  if (TH.ar) Object.keys(TH.ar).forEach(function(k){ T.ar[k] = TH.ar[k]; });

  /* ══════════ BRANDS ══════════ */
  var HOUSES = [
    {id:"usp",   n:"U.S. Polo Assn.", an:"يو إس بولو",    c:"USA",     k:"Men & Kids", cut:40, from:10.75, cls:"bl-usp",   mark:'<span class="m">U.S. Polo Assn.</span>'},
    {id:"lvr",   n:"La vie en rose",  an:"لا في أون روز", c:"Canada",  k:"Lingerie",   cut:0,  from:12.5,  cls:"bl-lvr",   mark:'<span class="m">la vie en rose</span>'},
    {id:"eden",  n:"Eden Park",       an:"إيدن بارك",     c:"Paris",   k:"Men",        cut:50, from:13.5,  cls:"bl-eden",  mark:'<span class="bow"></span><span class="m">Eden Park</span>'},
    {id:"betty", n:"Betty Barclay",   an:"بيتي باركلي",   c:"Germany", k:"Women",      cut:56, from:19,    cls:"bl-betty", mark:'<span class="m">Betty Barclay</span>'},
    {id:"ben",   n:"Benetton",        an:"بينيتون",       c:"Italy",   k:"Kids",       cut:29, from:7,     cls:"bl-ben",   mark:'<span class="t">United Colors of</span><span class="m">Benetton</span>'},
    {id:"mm",    n:"More & More",     an:"مور آند مور",   c:"Germany", k:"Women",      cut:50, from:13,    cls:"bl-mm",    mark:'<span class="m">More &amp; More</span>'},
    {id:"seven", n:"7 For All Mankind",an:"سفن",          c:"USA",     k:"Denim",      cut:50, from:43,    cls:"bl-seven", mark:'<span class="s7">7</span><span class="m">For All Mankind</span>'},
    {id:"celio", n:"Celio",           an:"سيليو",         c:"France",  k:"Men",        cut:70, from:0.75,  cls:"bl-celio", mark:'<span class="m">celio</span>'},
    {id:"tom",   n:"Tom Tailor",      an:"توم تيلور",     c:"Germany", k:"Women",      cut:50, from:10.5,  cls:"bl-tom",   mark:'<span class="m">TOM TAILOR</span>'},
    {id:"hunk",  n:"Hunkemöller",     an:"هانكمولر",      c:"Netherlands",k:"Lingerie",cut:51, from:6.5,   cls:"bl-hunk",  mark:'<span class="m">Hunkemöller</span>'},
    {id:"vera",  n:"Vera Mont",       an:"فيرا مونت",     c:"Germany", k:"Occasion",   cut:0,  from:28,    cls:"bl-vera",  mark:'<span class="m">Vera Mont</span>'},
    {id:"bebe",  n:"bebe",            an:"بيبي",          c:"Los Angeles",k:"Women",   cut:0,  from:45,    cls:"bl-bebe",  mark:'<span class="m">bebe</span>'}
  ];
  var HB = {}; HOUSES.forEach(function(h){ HB[h.id] = h; });
  function logo(id){ var h = HB[id]; return h ? '<span class="bl ' + h.cls + '" aria-label="' + h.n + '">' + h.mark + '</span>' : ""; }
  function hName(h){ return LANG === "ar" ? h.an : h.n; }

  /* ══════════ PRODUCTS — live Labesny catalogue, KWD ══════════ */
  var RAW = [
    ["bebe1","bebe","women","Strapless Embroidery Corset Top","توب كورسيه مطرز","Tops",49,49,["2","4","6","8","10"],[],9],
    ["bebe2","bebe","women","Asymmetrical Shoulder Tie Top","توب بكتف غير متماثل","Tops",45,45,["2","4","6","8","10"],["2"],14],
    ["bebe3","bebe","women","Tailored Straight Wide Leg Pant","بنطلون واسع مفصّل","Trousers",57,57,["2","4","6","8","10"],[],6],
    ["bebe4","bebe","women","Tailored Fitted Blazer","بليزر مفصّل","Blazers",80,80,["2","4","6","8"],[],4],
    ["bebe5","bebe","women","Scarf-detailed Wide Leg Jumpsuit","أوفرول واسع بوشاح","Jumpsuits",72,72,["2","4","6","8"],["8"],5],
    ["bebe6","bebe","women","Draped Sweetheart Romper","رومبر بقصة قلب","Rompers",52,52,["2","4","6","8"],[],8],
    ["lvr1","lvr","lingerie","Peachy Dream Peach Chemise","قميص نوم بيتشي دريم","Pajama top",12.5,12.5,["S","M","L","XL","XXL"],[],31],
    ["lvr2","lvr","lingerie","Mesh Chemise","قميص نوم شبكي","Nightgown",15.75,15.75,["XS","S","M","L","XL","XXL"],["XS"],22],
    ["lvr3","lvr","lingerie","Mesh Lace Babydoll","بيبي دول دانتيل",'Babydoll',16.75,16.75,["XS","S","M","L","XL","XXL"],[],18],
    ["lvr4","lvr","lingerie","Mesh 2-piece Crop Set","طقم قطعتين شبكي","Lingerie Set",16.75,16.75,["XS","S","M","L","XL","XXL"],[],27],
    ["usp1","usp","kids","Navy Blue Chinos","بنطلون تشينو كحلي","Chino Trousers",27.9,27.9,["3-4Y","4-5Y","5-6Y","6-7Y","7-8Y","8-9Y"],[],16],
    ["usp2","usp","kids","White Shirt Long Sleeve","قميص أبيض بأكمام طويلة","Shirts",10.75,17.9,["3-4Y","4-5Y","5-6Y","6-7Y","7-8Y","8-9Y"],["3-4Y"],24],
    ["usp3","usp","kids","Light Blue Shirt Long Sleeve","قميص أزرق فاتح","Shirts",10.75,17.9,["3-4Y","4-5Y","5-6Y","6-7Y","8-9Y","9-10Y"],[],19],
    ["usp4","usp","men","Stone Knitting Trouser","بنطلون تريكو","Sweatpants",12,23.9,["XS","S","M","L","XL","2XL"],["XS"],11],
    ["eden1","eden","men","Light Grey Chemise","قميص رمادي فاتح","Shirts",25.5,42,["XS","S","M","L","XL","2XL"],[],13],
    ["eden2","eden","men","Dark Grey Short-Sleeved T-Shirt","تي شيرت رمادي غامق","T-Shirts",13.5,22,["XS","S","M","L","XL","2XL"],[],28],
    ["eden3","eden","men","Light Blue Short-Sleeved Polo","بولو أزرق فاتح","Polo Shirts",17,34,["XS","S","M","L","XL","2XL"],["XS"],7],
    ["eden4","eden","men","White Short-Sleeved Polo","بولو أبيض","Polo Shirts",17,34,["XS","S","XL","2XL","3XL","4XL"],[],21],
    ["vera1","vera","women","Open Blouse Jacket","جاكيت بلوزة مفتوح","Jackets",36,36,["S","M","L","XL"],[],6],
    ["vera2","vera","women","Cape in a Glitter Look","كاب لامع","Capes",28,28,["One size"],[],9],
    ["mm1","mm","women","Wide-Legged Suit Trousers","بنطلون واسع رسمي","Dress Trousers",26,52,["36","38","40","42","44","46"],["36"],12],
    ["mm2","mm","women","Printed Scarf","وشاح مطبوع","Scarves",13,16,["One size"],[],34],
    ["seven1","seven","men","Pleated Trouser, Performance Knit","بنطلون بكسرات","Trousers",43,86,["29","30","31","32","33","34"],[],8],
    ["seven2","seven","men","Hybrid Pant, Performance Knit","بنطلون هايبرد","Chino Trousers",43,86,["30","31","32","33","34","36"],["36"],5],
    ["seven3","seven","men","The Straight in Denim Linen","جينز مستقيم كتان","Jeans",43,86,["29","30","31","32","33","34"],[],10],
    ["hunk1","hunk","lingerie","Satin Long Sleeve Pajama Set","طقم بيجاما ساتان","Pajama set",15,30,["S","M","L","XL"],[],26],
    ["hunk2","hunk","lingerie","Satin Elastic Waist Sleep Shorts","شورت نوم ساتان","Pajama Bottom",6.5,13.25,["S","M","L","XL"],[],41],
    ["hunk3","hunk","lingerie","Satin Short Sleeve Pajama Shirt","قميص بيجاما ساتان","Pajama set",8,16.25,["S","M","L","XL"],["S"],17],
    ["ben1","ben","kids","T-shirt with Disney Lilo & Stitch Print","تي شيرت ديزني","T-Shirts",7,9.9,["12-18M","18-24M","2-3Y","3-4Y","5-6Y","XS"],["12-18M"],33],
    ["ben2","ben","kids","Girls T-Shirt, Pink","تي شيرت بناتي وردي","T-Shirts",7,9.9,["12-18M","18-24M","2-3Y","3-4Y","5-6Y","XS"],[],29],
    ["ben3","ben","kids","Girls T-Shirt, Creamy White","تي شيرت بناتي أبيض","T-Shirts",7,9.9,["12-18M","18-24M","2-3Y","3-4Y","5-6Y","XS"],[],25],
    ["tom1","tom","women","Wide Leg Trousers, 2-in-1 Look","بنطلون واسع","Trousers",13.25,26.5,["S","M","L","XL","XXL"],[],15],
    ["tom2","tom","women","Viscose Blouse, Taupe","بلوزة فيسكوز بيج","Blouses",10.5,21,["38","40"],[],4],
    ["tom3","tom","women","Viscose Blouse, Light Yellow","بلوزة فيسكوز صفراء","Blouses",10.5,21,["38","40"],["38"],3],
    ["cel1","celio","men","Vest, Khaki Green","صديري كاكي","Outerwear",9,18,["S","M","L"],["M","L"],2],
    ["cel2","celio","men","Socks, Bottle Green","جوارب خضراء","Socks",0.75,2.5,["One Size"],[],58],
    ["cel3","celio","men","Socks, Black","جوارب سوداء","Socks",2.5,2.5,["One Size"],[],44],
    ["betty1","betty","women","Patterned Satin Skirt","تنورة ساتان مطبوعة","Midi Skirts",21,48,["36","38","40","42","44","46"],["36","38","40","42","44","46"],0],
    ["betty2","betty","women","Slip-On Skirt with Side Pockets","تنورة بجيوب جانبية","Midi Skirts",22,54,["36","38","40","42","44","46"],["36","38","40","42","44","46"],0]
  ];
  var P = RAW.map(function(r){
    return { id:r[0], b:r[1], img:r[0], d:r[2], n:r[3], an:r[4], ty:r[5],
             now:r[6], was:r[7], s:r[8], out:r[9], st:r[10],
             cut: r[7] > r[6] ? Math.round((1 - r[6] / r[7]) * 100) : 0,
             bn: (HB[r[1]] || {}).n || r[1] };
  });
  var PB = {}; P.forEach(function(p){ PB[p.id] = p; });
  function pName(p){ return LANG === "ar" ? p.an : p.n; }

  var CATS = [
    {n:"Tops",an:"توبات",d:"Women",ad:"نساء",ct:287},{n:"Blouses",an:"بلوزات",d:"Women",ad:"نساء",ct:145},
    {n:"Trousers",an:"بناطيل",d:"Women",ad:"نساء",ct:139},{n:"Blazers",an:"بليزر",d:"Women",ad:"نساء",ct:58},
    {n:"Midi Skirts",an:"تنانير",d:"Women",ad:"نساء",ct:64},{n:"Jumpsuits",an:"أوفرولات",d:"Women",ad:"نساء",ct:31},
    {n:"Jeans",an:"جينز",d:"Denim",ad:"جينز",ct:135},{n:"Polo Shirts",an:"بولو",d:"Men",ad:"رجال",ct:197},
    {n:"Shirts",an:"قمصان",d:"Men",ad:"رجال",ct:239},{n:"T-Shirts",an:"تي شيرت",d:"Men",ad:"رجال",ct:287},
    {n:"Chino Trousers",an:"تشينو",d:"Men",ad:"رجال",ct:54},{n:"Sweatshirts",an:"سويت شيرت",d:"Men",ad:"رجال",ct:56},
    {n:"Lingerie",an:"لانجيري",d:"Lingerie",ad:"لانجيري",ct:218},{n:"Bras",an:"حمالات",d:"Lingerie",ad:"لانجيري",ct:67},
    {n:"Pajama Sets",an:"أطقم بيجاما",d:"Lingerie",ad:"لانجيري",ct:74},{n:"Kids T-Shirts",an:"تي شيرت أطفال",d:"Kids",ad:"أطفال",ct:96},
    {n:"Kids Shirts",an:"قمصان أطفال",d:"Kids",ad:"أطفال",ct:88},{n:"Scarves",an:"أوشحة",d:"Women",ad:"نساء",ct:22}
  ];
  function cName(c){ return LANG === "ar" ? c.an : c.n; }
  function cDept(c){ return LANG === "ar" ? c.ad : c.d; }

  var MENUS = {
    women:{ cols:[
        {h:"Clothing",ah:"ملابس",li:[["Tops","توبات",287],["Blouses","بلوزات",145],["Trousers","بناطيل",139],["Blazers","بليزر",58],["Midi Skirts","تنانير",64],["Jumpsuits","أوفرولات",31]]},
        {h:"Occasion",ah:"مناسبات",li:[["Dresses","فساتين",96],["Capes","كابات",12],["Jackets","جواكيت",68],["Scarves","أوشحة",22]]}],
      tiles:[["catW","New in women","جديد النساء"],["tallA","Occasion","مناسبات"]],
      up:["bebe4","mm1"], brands:["bebe","betty","mm","vera","tom","seven"] },
    men:{ cols:[
        {h:"Clothing",ah:"ملابس",li:[["Polo Shirts","بولو",197],["Shirts","قمصان",239],["T-Shirts","تي شيرت",287],["Sweatshirts","سويت شيرت",56]]},
        {h:"Trousers",ah:"بناطيل",li:[["Chino Trousers","تشينو",54],["Jeans","جينز",135],["Sweatpants","بناطيل رياضية",41],["Socks","جوارب",18]]}],
      tiles:[["catM","Eden Park −50%","إيدن بارك −50%"],["tallB","The denim room","ركن الجينز"]],
      up:["eden3","seven3"], brands:["eden","celio","usp","seven"] },
    kids:{ cols:[
        {h:"Girls",ah:"بنات",li:[["T-Shirts","تي شيرت",96],["Shirts","قمصان",88],["Trousers","بناطيل",44],["Sets","أطقم",30]]},
        {h:"Boys",ah:"أولاد",li:[["Shirts","قمصان",88],["Chinos","تشينو",54],["T-Shirts","تي شيرت",96],["Shorts","شورتات",26]]}],
      tiles:[["catK","Benetton kids","بينيتون أطفال"],["catM","Little gent","إطلالة أنيقة"]],
      up:["ben2","usp2"], brands:["ben","usp"] },
    lingerie:{ cols:[
        {h:"Sleep",ah:"ملابس النوم",li:[["Pajama Sets","أطقم بيجاما",74],["Nightgowns","قمصان نوم",38],["Chemises","شميز",26],["Robes","أرواب",14]]},
        {h:"Lingerie",ah:"لانجيري",li:[["Bras","حمالات",67],["Briefs","سراويل",101],["Babydolls","بيبي دول",18],["Sets","أطقم",42]]}],
      tiles:[["catL","La vie en rose","لا في أون روز"],["tallC","Hunkemöller","هانكمولر"]],
      up:["lvr3","hunk1"], brands:["lvr","hunk"] }
  };

  /* ══════════ HELPERS ══════════ */
  function kwd(n){ return n.toFixed(3); }
  function money(n){ return kwd(n) + (LANG === "ar" ? " د.ك" : " KWD"); }
  function ls(k, v){
    try { if (v === undefined) { var r = localStorage.getItem(k); return r ? JSON.parse(r) : null; }
      localStorage.setItem(k, JSON.stringify(v)); } catch (e) { return null; }
  }
  function $(id){ return document.getElementById(id); }
  function img(k){ return (window.IMG && window.IMG[k]) || ""; }
  var toast = $("toast"), tt;
  function say(m){ if(!toast) return; toast.innerHTML = m; toast.classList.add("on"); clearTimeout(tt);
    tt = setTimeout(function(){ toast.classList.remove("on"); }, 2500); }

  /* ══════════ CARD ══════════ */
  function card(p){
    var vis = p.s.slice(0, 5), extra = p.s.length - vis.length;
    var szs = vis.map(function(s){
      return '<button type="button" aria-pressed="false"' + (p.out.indexOf(s) > -1 ? " disabled" : "") + '>' + s + '</button>';
    }).join("") + (extra > 0 ? '<button class="more" type="button" disabled>+' + extra + '</button>' : "");
    var low = p.st > 0 && p.st <= 8, none = p.st === 0;
    var avail = none ? t("soldOut","Sold out")
              : low ? t("onlyLeft","Only {n} left").replace("{n}", p.st)
              : t("inStock","In stock");
    var tag = p.cut ? '<span class="tag">−' + p.cut + '%</span>' : (TH.showNewTag === false ? "" : '<span class="tag soft">' + t("newTag","New") + '</span>');
    return '<article class="card" data-id="' + p.id + '">' +
      '<div class="ph"><img src="' + img(p.img) + '" alt="' + p.n + '" loading="lazy">' + tag +
      '<button class="fav" type="button" aria-pressed="false" aria-label="Save">♡</button>' +
      '<button class="quick" type="button">' + t("completeLook","Complete the look") + '</button></div>' +
      '<div class="in"><div class="bh">' + (TH.cardBrandText ? '<span class="bn">' + hName(HB[p.b]) + '</span>' : logo(p.b)) + '</div>' +
      '<p class="nm">' + pName(p) + '</p>' +
      '<div class="pr"><span class="now">' + money(p.now) + '</span>' +
        (p.cut ? '<s>' + kwd(p.was) + '</s>' : "") + '</div>' +
      '<div class="szs">' + szs + '</div>' +
      '<div class="avail"><span class="d ' + (none ? "no" : low ? "low" : "") + '"></span><em>' + avail + '</em></div>' +
      '<div class="add"><button type="button" class="' + (none ? "off" : "") + '">' +
      (none ? t("notify","Notify me") : t("addBag","Add to bag")) + '</button></div></div></article>';
  }

  /* ══════════ GRID ══════════ */
  var filt = "all";
  function matches(p){
    if (filt === "all") return true;
    if (filt === "deal") return p.cut >= 50;
    if (filt.indexOf("p:") === 0){
      var b = filt.slice(2).split("-"), lo = +b[0], hi = b[1] === "" ? Infinity : +b[1];
      return p.now >= lo && p.now <= hi;
    }
    return p.d === filt;
  }
  function applyGrid(){
    var g = $("grid"); if (!g) return;
    var l = P.filter(matches).sort(function(a,b){ return b.cut - a.cut || a.now - b.now; });
    g.innerHTML = l.length ? l.map(card).join("") : '<p class="nores">' + t("noRes","No results") + '</p>';
    var s = $("shownN"); if (s) s.textContent = l.length + " " + t("items","items");
  }
  function setFilter(v){
    filt = v;
    document.querySelectorAll("[data-f]").forEach(function(x){ x.setAttribute("aria-pressed", x.dataset.f === v ? "true" : "false"); });
    applyGrid();
  }

  /* ══════════ CAROUSELS ══════════ */
  var CAR = { feat:{el:"featTrack",ids:TH.feat||[]}, also:{el:"alsoTrack",ids:TH.also||[]}, recent:{el:"recentTrack",ids:[]} };
  function fillCar(k){
    var c = CAR[k], el = $(c.el); if (!el) return;
    el.innerHTML = c.ids.map(function(id){ return PB[id] ? card(PB[id]) : ""; }).join("");
  }

  /* ══════════ RECENTLY VIEWED ══════════ */
  var RKEY = "lab_" + (TH.key || "x") + "_recent", SKEY = "lab_" + (TH.key || "x") + "_searches";
  function pushRecent(id){
    var r = ls(RKEY) || [];
    r = r.filter(function(x){ return x !== id; }); r.unshift(id); r = r.slice(0, 8);
    ls(RKEY, r); renderRecent();
  }
  function renderRecent(){
    var sec = $("recent"); if (!sec) return;
    var r = (ls(RKEY) || []).filter(function(id){ return PB[id]; });
    if (!r.length) { sec.hidden = true; return; }
    sec.hidden = false; CAR.recent.ids = r; fillCar("recent");
  }

  /* ══════════ LOOK + BUNDLE ══════════ */
  function renderLook(){
    var el = $("lookStack"); if (!el) return;
    el.innerHTML = (TH.look || []).map(function(id){
      var p = PB[id]; if (!p) return "";
      return '<div class="it"><img src="' + img(p.img) + '" alt="" loading="lazy">' +
        '<span class="d"><span class="b">' + hName(HB[p.b]) + '</span><b>' + pName(p) + '</b>' +
        '<span>' + money(p.now) + (p.cut ? '<s>' + kwd(p.was) + '</s>' : "") + '</span></span>' +
        '<button type="button" data-up="' + p.id + '">+</button></div>';
    }).join("");
  }
  var BUNDLE = TH.bundle || [], bsel = {};
  BUNDLE.forEach(function(id){ bsel[id] = true; });
  function renderBundle(){
    var el = $("bset"); if (!el) return;
    el.innerHTML = BUNDLE.map(function(id, i){
      var p = PB[id]; if (!p) return "";
      return (i ? '<span class="bplus">+</span>' : "") +
        '<div class="bitem"><div class="ph' + (bsel[id] ? "" : " off") + '"><img src="' + img(p.img) + '" alt="" loading="lazy"></div>' +
        '<label><input type="checkbox" data-b="' + id + '"' + (bsel[id] ? " checked" : "") + '> ' + hName(HB[p.b]) + '</label>' +
        '<span class="n">' + pName(p) + '</span><span class="p">' + money(p.now) + '</span></div>';
    }).join("");
    var ch = BUNDLE.filter(function(id){ return bsel[id]; });
    var full = ch.reduce(function(a, id){ return a + PB[id].now; }, 0);
    var rate = ch.length >= 3 ? .12 : ch.length === 2 ? .07 : 0;
    var save = full * rate;
    if ($("bCount")) $("bCount").textContent = ch.length;
    if ($("bFull")) $("bFull").textContent = money(full);
    if ($("bSave")) $("bSave").textContent = save ? "−" + money(save) : "—";
    if ($("bTotal")) $("bTotal").textContent = money(full - save);
  }

  /* ══════════ CART ══════════ */
  var FREE = 20;
  var cart = [{ id:"eden3", sz:"M", q:1 }, { id:"lvr3", sz:"S", q:1 }];
  var gift = false;
  function totals(){
    var sub = 0, full = 0, n = 0;
    cart.forEach(function(c){ var p = PB[c.id]; sub += p.now * c.q; full += p.was * c.q; n += c.q; });
    return { sub:sub, full:full, n:n, save:full - sub, ship:(sub >= FREE || sub === 0) ? 0 : 1.5 };
  }
  function addToCart(p, sz, quiet){
    var ex = cart.find(function(c){ return c.id === p.id && c.sz === sz; });
    if (ex) ex.q++; else cart.push({ id:p.id, sz:sz || "One", q:1 });
    pushRecent(p.id);
    if (!quiet) { renderCart(); openCart(); }
  }
  function renderCart(){
    var T2 = totals();
    if ($("bagN")) $("bagN").textContent = T2.n;
    if ($("bagV")) $("bagV").textContent = kwd(T2.sub);
    if ($("cartCount")) $("cartCount").textContent = T2.n + " " + t("items","items");
    if ($("shipBar")) $("shipBar").style.width = Math.min(100, (T2.sub / FREE) * 100) + "%";
    if ($("shipMsg")) $("shipMsg").innerHTML = T2.sub >= FREE
      ? t("freeShipDone","Delivery is on us — <b>free</b> on this order.")
      : t("freeShipMore","Add <b>{n} KWD</b> for free delivery.").replace("{n}", kwd(FREE - T2.sub));

    if ($("cartBody")) $("cartBody").innerHTML = cart.length ? cart.map(function(c, i){
      var p = PB[c.id];
      return '<div class="citem"><img src="' + img(p.img) + '" alt="" loading="lazy">' +
        '<span class="d"><span class="b">' + hName(HB[p.b]) + '</span><p class="n">' + pName(p) + '</p>' +
        '<span class="sz">' + t("size","Size") + ' ' + c.sz + '</span>' +
        '<span class="qty"><button type="button" data-q="-1" data-i="' + i + '" aria-label="-">−</button>' +
        '<span>' + c.q + '</span><button type="button" data-q="1" data-i="' + i + '" aria-label="+">+</button></span></span>' +
        '<span class="rt"><span class="p">' + money(p.now * c.q) + '</span>' +
        '<button class="rm" type="button" data-rm="' + i + '">' + t("remove","Remove") + '</button></span></div>';
    }).join("") : '<div class="cart-empty">' + t("emptyBag","Your bag is empty.") + '</div>';

    var inBag = cart.map(function(c){ return c.id; });
    var recs = P.filter(function(p){ return inBag.indexOf(p.id) < 0 && p.st > 0; })
                .sort(function(a,b){ return a.now - b.now; }).slice(0, 3);
    if ($("cartUp")) $("cartUp").innerHTML = '<h6>' + t("goesWith","Goes with this") + '</h6>' +
      recs.map(function(p){
        return '<div class="upsell"><img src="' + img(p.img) + '" alt="" loading="lazy">' +
          '<span class="d"><b>' + pName(p) + '</b><span>' + money(p.now) + '</span></span>' +
          '<button type="button" data-up="' + p.id + '">+</button></div>';
      }).join("") +
      '<label class="giftrow"><input type="checkbox" id="giftBox"' + (gift ? " checked" : "") + '> ' +
      t("giftWrap","Add complimentary gift wrapping") + '</label>';

    if ($("cartFt")) $("cartFt").innerHTML =
      '<div class="ln"><span>' + t("subtotal","Subtotal") + '</span><span class="num">' + money(T2.sub) + '</span></div>' +
      (T2.save ? '<div class="ln save"><span>' + t("youSave","You save") + '</span><span class="num">−' + money(T2.save) + '</span></div>' : "") +
      '<div class="ln"><span>' + t("delivery","Delivery") + '</span><span class="num">' + (T2.ship ? money(T2.ship) : t("free","Free")) + '</span></div>' +
      '<div class="ln tot"><span>' + t("total","Total") + '</span><span class="num">' + money(T2.sub + T2.ship) + '</span></div>' +
      '<button class="btn primary" type="button" style="width:100%" id="checkout">' + t("checkout","Checkout") + ' · ' + money(T2.sub + T2.ship) + '</button>' +
      '<p class="payline">' + t("payLine","Cash on delivery · KNET · Visa · Mastercard") + '</p>';
  }

  /* ══════════ MEGA ══════════ */
  function buildMega(k){
    var mega = $("mega"), m = MENUS[k]; if (!mega || !m) return;
    var cols = '<div class="mega-cols">' + m.cols.map(function(c){
      return '<div><h5>' + (LANG === "ar" ? c.ah : c.h) + '</h5><ul>' + c.li.map(function(x){
        return '<li><a href="#shop">' + (LANG === "ar" ? x[1] : x[0]) + '<em>' + x[2] + '</em></a></li>';
      }).join("") + '</ul></div>';
    }).join("") + '<div style="grid-column:1/-1"><h5>' + t("brands","Brands") + '</h5><div class="mega-brands">' +
      m.brands.map(function(id){ return '<a href="#shop" data-brand="' + id + '">' + logo(id) + '</a>'; }).join("") + '</div></div></div>';
    var tiles = '<div class="mcol">' + m.tiles.map(function(tl){
      return '<a href="#shop"><img src="' + img(tl[0]) + '" alt=""><span>' + (LANG === "ar" ? tl[2] : tl[1]) + '</span></a>';
    }).join("") + '</div>';
    var up = '<div class="mup"><h5>' + t("alsoH","You may also like") + '</h5>' + m.up.map(function(id){
      var p = PB[id]; if (!p) return "";
      return '<div class="mup-it"><img src="' + img(p.img) + '" alt="" loading="lazy">' +
        '<span class="d"><b>' + pName(p) + '</b><span>' + money(p.now) + (p.cut ? '<s>' + kwd(p.was) + '</s>' : "") + '</span></span>' +
        '<button type="button" data-up="' + p.id + '">+</button></div>';
    }).join("") + '</div>';
    var terms = LANG === "ar" ? ["إيدن بارك","بيجامات","جينز","بولو","تنانير"] : ["Eden Park","Pyjamas","Denim","Polo","Skirts"];
    var search = '<div class="mega-srch"><button class="fake" type="button" data-opensearch>' +
      '<span aria-hidden="true">⌕</span><span>' + t("searchPlaceholder","Search a piece or a brand…") + '</span></button>' +
      '<div class="chips">' + terms.map(function(x){ return '<button type="button" data-q="' + x + '">' + x + '</button>'; }).join("") + '</div></div>';
    mega.innerHTML = '<div class="mega-in">' + cols + tiles + up + search + '</div>';
  }
  function closeMega(){ var n = $("nav"); if (n) n.querySelectorAll("li").forEach(function(x){ x.classList.remove("open"); }); }

  /* ══════════ OVERLAYS ══════════ */
  var scrim = $("scrim"), cartEl = $("cart"), drawEl = $("draw"), srchEl = $("srch");
  function lock(on){ document.body.classList.toggle("locked", on); if (scrim) scrim.classList.toggle("on", on); }
  function closeAll(){ [cartEl, drawEl, srchEl].forEach(function(e){ if (e) e.classList.remove("on"); }); lock(false); }
  function openCart(){ closeAll(); if (cartEl) { cartEl.classList.add("on"); lock(true); } }
  function openDraw(){ closeAll(); if (drawEl) { drawEl.classList.add("on"); lock(true); } }
  function openSrch(){ closeAll(); if (!srchEl) return; srchEl.classList.add("on"); lock(true); renderSearch("");
    setTimeout(function(){ var i = $("srchInput"); if (i) i.focus(); }, 60); }

  /* ══════════ DRAWER ══════════ */
  function buildDrawer(){
    var panes = $("drawPanes"); if (!panes) return;
    var lab = { women:t("women","Women"), men:t("men","Men"), kids:t("kids","Kids"), lingerie:t("lingerie","Lingerie") };
    panes.innerHTML = '<div class="pane root">' +
      Object.keys(MENUS).map(function(k){
        return '<button class="go" type="button" data-open="' + k + '">' + lab[k] + '<span class="ar">›</span></button>';
      }).join("") +
      '<a href="#shop" class="hot">' + t("sale","Sale") + '</a>' +
      '<a href="#new">' + t("newIn","New In") + '</a>' +
      '<h6>' + t("brands","Brands") + '</h6><div class="draw-brands">' +
      HOUSES.map(function(h){ return '<a href="#shop" data-brand="' + h.id + '">' + logo(h.id) + '</a>'; }).join("") +
      '</div></div>' +
      Object.keys(MENUS).map(function(k){
        return '<div class="pane sub" data-p="' + k + '"><button class="back" type="button" data-back>‹ ' + t("allCats","All categories") + '</button>' +
          MENUS[k].cols.map(function(c){
            return '<h6>' + (LANG === "ar" ? c.ah : c.h) + '</h6>' + c.li.map(function(x){
              return '<a href="#shop">' + (LANG === "ar" ? x[1] : x[0]) + '</a>';
            }).join("");
          }).join("") + '</div>';
      }).join("");
    panes.onclick = function(e){
      var o = e.target.closest("[data-open]"), b = e.target.closest("[data-back]"), a = e.target.closest("a");
      if (o) panes.querySelector('.pane[data-p="' + o.dataset.open + '"]').classList.add("in");
      else if (b) panes.querySelectorAll(".pane.sub").forEach(function(p){ p.classList.remove("in"); });
      else if (a) closeAll();
    };
  }

  /* ══════════ SEARCH ══════════ */
  var selIdx = -1, rows = [];
  function esc(s){ return String(s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
  function hl(x, q){
    if (!q) return esc(x);
    var i = x.toLowerCase().indexOf(q.toLowerCase());
    return i < 0 ? esc(x) : esc(x.slice(0,i)) + "<mark>" + esc(x.slice(i,i+q.length)) + "</mark>" + esc(x.slice(i+q.length));
  }
  function score(h, q){
    h = String(h).toLowerCase(); q = q.toLowerCase();
    if (h === q) return 100;
    if (h.indexOf(q) === 0) return 80;
    if (h.indexOf(q) > -1) return 60;
    var tk = q.split(/\s+/).filter(Boolean);
    return tk.length && tk.every(function(x){ return h.indexOf(x) > -1; }) ? 40 : 0;
  }
  function renderSearch(q){
    var body = $("srchBody"), cnt = $("srchCount"); if (!body) return;
    q = (q || "").trim(); rows = []; selIdx = -1;
    var html = "";
    if (!q) {
      var rec = ls(SKEY) || [];
      if (rec.length) html += '<div class="srch-grp"><h6>' + t("recent","Recent") + '</h6></div><div class="srch-chips">' +
        rec.slice(0,6).map(function(x){ return '<button type="button" data-q="' + esc(x) + '">' + esc(x) + '</button>'; }).join("") + '</div>';
      var trend = LANG === "ar" ? ["إيدن بارك","بيجامات","جينز","بولو","تنانير"] : ["Eden Park","Pyjamas","Denim","Polo","Skirts"];
      html += '<div class="srch-grp"><h6>' + t("trending","Trending") + '</h6></div><div class="srch-chips">' +
        trend.map(function(x){ return '<button type="button" data-q="' + esc(x) + '">' + esc(x) + '</button>'; }).join("") + '</div>' +
        '<div class="srch-grp"><h6>' + t("jumpBrand","Jump to a brand") + '</h6></div><div class="srch-chips">' +
        HOUSES.slice(0,8).map(function(h){ return '<button type="button" data-q="' + esc(hName(h)) + '">' + esc(hName(h)) + '</button>'; }).join("") + '</div>';
      body.innerHTML = html; if (cnt) cnt.textContent = ""; return;
    }
    var bs = HOUSES.map(function(h){ return {h:h, s:Math.max(score(h.n + " " + h.c + " " + h.k, q), score(h.an, q))}; })
                   .filter(function(x){ return x.s > 0; }).sort(function(a,b){ return b.s - a.s; }).slice(0,4);
    var cs = CATS.map(function(c){ return {c:c, s:Math.max(score(c.n + " " + c.d, q), score(c.an, q))}; })
                 .filter(function(x){ return x.s > 0; }).sort(function(a,b){ return b.s - a.s; }).slice(0,5);
    var ps = P.map(function(p){ return {p:p, s:Math.max(score(p.n + " " + p.bn + " " + p.ty, q), score(p.an, q))}; })
              .filter(function(x){ return x.s > 0; }).sort(function(a,b){ return b.s - a.s || a.p.now - b.p.now; }).slice(0,7);
    var total = bs.length + cs.length + ps.length;
    if (!total) {
      body.innerHTML = '<div class="srch-empty">' + t("noRes","No results for") + ' “' + esc(q) + '”.<br>' +
        '<span class="sub">' + t("noResSub","Try a brand name or a category.") + '</span></div>';
      if (cnt) cnt.textContent = "0"; return;
    }
    if (bs.length) {
      html += '<div class="srch-grp"><h6>' + t("grpBrands","Brands") + '</h6></div>';
      bs.forEach(function(x){
        rows.push({ t:"brand", v:x.h.id, label:hName(x.h) });
        html += '<div class="srch-row" data-r="' + (rows.length-1) + '"><span class="bx">' + logo(x.h.id) + '</span>' +
          '<span class="nm"><b>' + hl(hName(x.h), q) + '</b><span>' + x.h.c + " · " + x.h.k + '</span></span>' +
          '<span class="pr">' + (x.h.cut ? "−" + x.h.cut + "%" : kwd(x.h.from)) + '</span></div>';
      });
    }
    if (cs.length) {
      html += '<div class="srch-grp"><h6>' + t("grpCats","Categories") + '</h6></div>';
      cs.forEach(function(x){
        rows.push({ t:"cat", v:x.c.n, label:cName(x.c) });
        html += '<div class="srch-row" data-r="' + (rows.length-1) + '"><span class="bx ic">▦</span>' +
          '<span class="nm"><b>' + hl(cName(x.c), q) + '</b><span>' + cDept(x.c) + '</span></span>' +
          '<span class="pr">' + x.c.ct + '</span></div>';
      });
    }
    if (ps.length) {
      html += '<div class="srch-grp"><h6>' + t("grpItems","Items") + '</h6></div>';
      ps.forEach(function(x){
        var p = x.p; rows.push({ t:"prod", v:p.id, label:pName(p) });
        html += '<div class="srch-row" data-r="' + (rows.length-1) + '"><img src="' + img(p.img) + '" alt="" loading="lazy">' +
          '<span class="nm"><b>' + hl(pName(p), q) + '</b><span>' + hName(HB[p.b]) + '</span></span>' +
          '<span class="pr">' + kwd(p.now) + (p.cut ? '<s>' + kwd(p.was) + '</s>' : "") + '</span></div>';
      });
    }
    body.innerHTML = html;
    if (cnt) cnt.textContent = total + " " + t("results","results");
  }
  function moveSel(d){
    var els = $("srchBody").querySelectorAll(".srch-row"); if (!els.length) return;
    selIdx = (selIdx + d + els.length) % els.length;
    els.forEach(function(e, i){ e.classList.toggle("sel", i === selIdx); });
    els[selIdx].scrollIntoView({ block:"nearest" });
  }
  function commit(i){
    var r = rows[i]; if (!r) return;
    var q = $("srchInput").value.trim();
    if (q) { var h = ls(SKEY) || []; ls(SKEY, [q].concat(h.filter(function(x){ return x !== q; })).slice(0, 6)); }
    closeAll();
    if (r.t === "prod") pushRecent(r.v);
    var s = $("shop"); if (s) s.scrollIntoView();
    say(r.label);
  }

  /* ══════════ PAINTERS ══════════ */
  function paintHero(){
    var h = $("heroImg"); if (h) h.src = img(TH.heroImg);
    var s = $("splitImg"); if (s) s.src = img(TH.splitImg);
    var w = $("wideImg"); if (w) w.src = img(TH.wideImg);
    var tag = $("heroTag"), p = PB[TH.heroTagId];
    if (tag && p) tag.innerHTML = '<span class="b">' + hName(HB[p.b]) + '</span><span class="n">' + pName(p) +
      '</span><span class="p">' + money(p.now) + (p.cut ? '<s>' + kwd(p.was) + '</s>' : "") + '</span>';
  }
  var CATTILES = [
    {k:"women",   img:"catW", en:"Women",   ar:"نساء"},
    {k:"men",     img:"catM", en:"Men",     ar:"رجال"},
    {k:"kids",    img:"catK", en:"Kids",    ar:"أطفال"},
    {k:"lingerie",img:"catL", en:"Lingerie",ar:"لانجيري"}
  ];
  function paintCats(){
    var el = $("cats"); if (!el) return;
    el.innerHTML = CATTILES.map(function(c){
      return '<a class="cat" href="#shop" data-catfilter="' + c.k + '">' +
        '<img src="' + img(c.img) + '" alt="" loading="lazy">' +
        '<span class="c"><span class="h">' + (LANG === "ar" ? c.ar : c.en) + '</span>' +
        '<span class="go">' + t("shopNow","Shop now") + '</span></span></a>';
    }).join("");
  }
  function paintMarq(){
    var el = $("marq"); if (!el) return;
    var one = HOUSES.map(function(h){ return '<a href="#shop" data-brand="' + h.id + '" title="' + h.n + '">' + logo(h.id) + '</a>'; }).join("");
    el.innerHTML = "<span>" + one + "</span><span aria-hidden='true'>" + one + "</span>";
  }
  function paintBrandGrid(){
    var el = $("brandGrid"); if (!el) return;
    el.innerHTML = HOUSES.map(function(h){
      return '<a class="bcell" href="#shop" data-brand="' + h.id + '">' + logo(h.id) +
        '<span class="meta">' + h.c + ' · ' + (h.cut ? "−" + h.cut + "%" : t("newIn","New In")) + '</span></a>';
    }).join("");
  }
  function paintFooterBrands(){
    var el = $("ftBrands"); if (!el) return;
    el.innerHTML = HOUSES.slice(0, 7).map(function(h){
      return '<li><a href="#shop" data-brand="' + h.id + '">' + hName(h) + '</a></li>';
    }).join("");
  }

  /* ══════════ EVENTS ══════════ */
  var nav = $("nav"), mega = $("mega"), mt;
  if (nav && mega) {
    nav.addEventListener("mouseover", function(e){
      var li = e.target.closest("li[data-menu]"); clearTimeout(mt);
      if (!li) { mt = setTimeout(closeMega, 180); return; }
      closeMega(); li.classList.add("open"); buildMega(li.dataset.menu);
    });
    nav.addEventListener("mouseleave", function(){ mt = setTimeout(closeMega, 200); });
    mega.addEventListener("mouseenter", function(){ clearTimeout(mt); });
    mega.addEventListener("mouseleave", function(){ mt = setTimeout(closeMega, 200); });
    nav.addEventListener("focusin", function(e){
      var li = e.target.closest("li[data-menu]");
      if (li) { closeMega(); li.classList.add("open"); buildMega(li.dataset.menu); }
    });
  }
  if (scrim) scrim.addEventListener("click", closeAll);
  if ($("cartTrig")) $("cartTrig").addEventListener("click", openCart);
  if ($("cartClose")) $("cartClose").addEventListener("click", closeAll);
  if ($("burger")) $("burger").addEventListener("click", openDraw);
  if ($("drawClose")) $("drawClose").addEventListener("click", closeAll);
  if ($("searchTrig")) $("searchTrig").addEventListener("click", openSrch);
  if ($("srchClose")) $("srchClose").addEventListener("click", closeAll);
  document.addEventListener("keydown", function(e){
    if (e.key === "Escape") closeAll();
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); openSrch(); }
  });
  var si = $("srchInput");
  if (si) {
    si.addEventListener("input", function(){ renderSearch(this.value); });
    si.addEventListener("keydown", function(e){
      if (e.key === "ArrowDown") { e.preventDefault(); moveSel(1); }
      else if (e.key === "ArrowUp") { e.preventDefault(); moveSel(-1); }
      else if (e.key === "Enter") { e.preventDefault(); commit(selIdx < 0 ? 0 : selIdx); }
    });
  }
  if ($("srchBody")) $("srchBody").addEventListener("click", function(e){
    var chip = e.target.closest("[data-q]");
    if (chip) { si.value = chip.dataset.q; renderSearch(chip.dataset.q); si.focus(); return; }
    var row = e.target.closest(".srch-row"); if (row) commit(+row.dataset.r);
  });
  if ($("cartBody")) $("cartBody").addEventListener("click", function(e){
    var q = e.target.closest("[data-q]"), rm = e.target.closest("[data-rm]");
    if (q) { var i = +q.dataset.i; cart[i].q += +q.dataset.q; if (cart[i].q < 1) cart.splice(i, 1); renderCart(); }
    if (rm) { cart.splice(+rm.dataset.rm, 1); renderCart(); }
  });
  if ($("cartUp")) $("cartUp").addEventListener("change", function(e){
    if (e.target.id === "giftBox") { gift = e.target.checked; renderCart(); }
  });
  if ($("cartFt")) $("cartFt").addEventListener("click", function(e){
    if (e.target.id === "checkout") say(t("checkout","Checkout"));
  });
  if ($("bset")) $("bset").addEventListener("change", function(e){
    var i = e.target.closest("input[data-b]"); if (!i) return;
    bsel[i.dataset.b] = i.checked; renderBundle();
  });
  if ($("bAdd")) $("bAdd").addEventListener("click", function(){
    var ch = BUNDLE.filter(function(id){ return bsel[id]; });
    if (!ch.length) { say(t("pickSize","Pick at least one piece")); return; }
    ch.forEach(function(id){ var p = PB[id]; addToCart(p, p.s.find(function(s){ return p.out.indexOf(s) < 0; }), true); });
    renderCart(); openCart(); say(t("added","Added to bag"));
  });
  if ($("filt")) $("filt").addEventListener("click", function(e){
    var b = e.target.closest("[data-f]"); if (!b) return;
    setFilter(b.dataset.f);
  });
  if ($("nlForm")) $("nlForm").addEventListener("submit", function(e){
    e.preventDefault(); say(t("subd","Subscribed — your code is on its way")); this.reset();
  });

  document.addEventListener("click", function(e){
    var tg = e.target;
    var carb = tg.closest("[data-car]");
    if (carb) {
      var el = $(CAR[carb.dataset.car].el); if (!el) return;
      var dir = parseInt(carb.dataset.dir, 10) * (LANG === "ar" ? -1 : 1);
      el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior:"smooth" }); return;
    }
    if (tg.closest("[data-opensearch]")) { e.preventDefault(); openSrch(); return; }
    var qc = tg.closest(".mega-srch [data-q]");
    if (qc) { openSrch(); si.value = qc.dataset.q; renderSearch(qc.dataset.q); return; }
    var up = tg.closest("[data-up]");
    if (up) {
      e.preventDefault(); var pu = PB[up.dataset.up]; if (!pu) return;
      addToCart(pu, pu.s.find(function(s){ return pu.out.indexOf(s) < 0; }), true);
      renderCart(); say(t("added","Added to bag")); return;
    }
    var bf = tg.closest("[data-brand]");
    if (bf) { e.preventDefault(); closeAll(); setFilter("all");
      var s1 = $("shop"); if (s1) s1.scrollIntoView(); say(hName(HB[bf.dataset.brand])); return; }
    var cf = tg.closest("[data-catfilter]");
    if (cf) { e.preventDefault(); setFilter(cf.dataset.catfilter);
      var s2 = $("shop"); if (s2) s2.scrollIntoView({behavior:"smooth"}); return; }
    if (tg.closest(".szs") && tg.tagName === "BUTTON" && !tg.disabled) {
      tg.closest(".szs").querySelectorAll("button").forEach(function(x){ x.setAttribute("aria-pressed","false"); });
      tg.setAttribute("aria-pressed","true"); return;
    }
    if (tg.classList.contains("fav")) {
      var on = tg.getAttribute("aria-pressed") === "true";
      tg.setAttribute("aria-pressed", on ? "false" : "true");
      tg.textContent = on ? "♡" : "♥";
      var w = $("wlN");
      if (w) w.textContent = Math.max(0, parseInt(w.textContent, 10) + (on ? -1 : 1));
      say(on ? t("unsaved","Removed from saved") : t("savedMsg","Saved")); return;
    }
    if (tg.classList.contains("quick")) {
      var pc = tg.closest(".card"); pushRecent(pc.dataset.id);
      var a = $("also"); if (a) a.scrollIntoView({ behavior:"smooth" }); return;
    }
    if (tg.closest(".card .add") && tg.tagName === "BUTTON") {
      var c = tg.closest(".card"), p = PB[c.dataset.id];
      if (tg.classList.contains("off")) { say(t("notify","Notify me")); return; }
      var free = c.querySelectorAll('.szs button:not([disabled]):not(.more)');
      var ch2 = c.querySelector('.szs button[aria-pressed="true"]');
      if (free.length > 1 && !ch2 && window.innerWidth > 560) { say(t("pickSize","Choose a size first")); free[0].focus(); return; }
      addToCart(p, ch2 ? ch2.textContent : (free[0] ? free[0].textContent : "One"));
      renderCart(); return;
    }
  });

  /* ══════════ LANGUAGE ══════════ */
  function applyLang(){
    var html = document.documentElement;
    html.lang = LANG === "ar" ? "ar" : "en";
    html.dir = LANG === "ar" ? "rtl" : "ltr";
    document.querySelectorAll("[data-t]").forEach(function(el){
      if (!el.dataset.en) el.dataset.en = el.innerHTML;
      el.innerHTML = LANG === "ar" ? (T.ar[el.dataset.t] !== undefined ? T.ar[el.dataset.t] : el.dataset.en) : el.dataset.en;
    });
    if (si) si.placeholder = t("searchPlaceholder", "Search a piece or a brand…");
    if ($("nlIn")) $("nlIn").placeholder = LANG === "ar" ? "بريدك الإلكتروني" : "your@email.com";
    document.querySelectorAll("[data-lang]").forEach(function(b){
      b.setAttribute("aria-pressed", b.dataset.lang === LANG ? "true" : "false");
    });
    paintHero(); paintCats(); paintMarq(); paintBrandGrid(); paintFooterBrands();
    applyGrid(); fillCar("feat"); fillCar("also"); renderRecent();
    renderLook(); renderBundle(); renderCart(); buildDrawer(); closeMega();
    if (typeof window.labThemeHook === "function")
      window.labThemeHook({ LANG:LANG, t:t, money:money, kwd:kwd, P:P, PB:PB, HOUSES:HOUSES, HB:HB,
                            img:img, card:card, hName:hName, pName:pName, setFilter:setFilter });
    ls("lab_lang", LANG);
  }
  document.addEventListener("click", function(e){
    var b = e.target.closest("[data-lang]"); if (!b) return;
    LANG = b.dataset.lang; applyLang();
  });

  window.LAB = { addToCart:addToCart, renderCart:renderCart, openCart:openCart, say:say,
                 PB:PB, P:P, card:card, setFilter:setFilter, money:money, kwd:kwd, img:img };

  if (ls("lab_lang") === "ar") LANG = "ar";
  applyLang();
})();
