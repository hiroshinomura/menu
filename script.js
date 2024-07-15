document.addEventListener("DOMContentLoaded", function() {
    const menus = [
        "オートミールとフルーツ",
        "アボカドトーストと卵",
        "ギリシャヨーグルトとナッツ",
        "スムージーボウル",
        "ベジタブルオムレツ",
        "豆腐と野菜の炒め物",
        "全粒粉パンケーキとフルーツ",
        "サーモンサラダ",
        "チアプディング",
        "クスクスと野菜のサラダ",
        "ナッツとフルーツのヨーグルトパフェ",
        "卵とほうれん草のラップサンド",
        "ブルーベリースムージー",
        "鶏胸肉と野菜のスープ",
        "シリアルとフルーツ",
        "トマトとバジルのオムレツ",
        "ひよこ豆とキヌアのサラダ",
        "サツマイモのトーストとアボカド",
        "ツナとアボカドのサラダ",
        "カッテージチーズとフルーツ"
    ];

    document.getElementById("suggestButton").addEventListener("click", function() {
        const menu = menus[Math.floor(Math.random() * menus.length)];
        document.getElementById("menu").textContent = menu;
    });
});
