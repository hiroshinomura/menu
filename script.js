document.addEventListener("DOMContentLoaded", function() {
    const menus = {
        "和食": [
            {
                name: "おにぎりとみそ汁",
                recipe: "おにぎり: ご飯と好きな具材を混ぜて握ります。味噌汁: だしに味噌を溶かし、具材（豆腐、わかめなど）を入れて煮ます。"
            },
            {
                name: "納豆ご飯と卵焼き",
                recipe: "納豆ご飯: 納豆をかき混ぜ、醤油を加えてご飯にかけます。卵焼き: 卵を溶いて砂糖と醤油を加え、フライパンで焼きます。"
            },
            {
                name: "焼き魚とご飯",
                recipe: "焼き魚: 好きな魚を塩で下味をつけて焼きます。ご飯: 普通に炊飯器で炊きます。"
            },
            {
                name: "豆腐とわかめの味噌汁",
                recipe: "だしに味噌を溶かし、豆腐とわかめを入れて煮ます。"
            },
            {
                name: "鮭の塩焼きとご飯",
                recipe: "鮭に塩を振ってグリルで焼きます。ご飯: 普通に炊飯器で炊きます。"
            }
        ],
        "洋食": [
            {
                name: "オートミールとフルーツ",
                recipe: "オートミール: 牛乳か水で煮ます。フルーツ: お好みのフルーツを添えます。"
            },
            {
                name: "アボカドトーストと卵",
                recipe: "アボカドトースト: アボカドをつぶし、塩とレモン汁で味付けしてトーストに乗せます。卵: 好みの方法で調理します（例: 目玉焼き、スクランブルエッグ）。"
            },
            {
                name: "ギリシャヨーグルトとナッツ",
                recipe: "ギリシャヨーグルトにお好みのナッツをトッピングし、蜂蜜をかけます。"
            },
            {
                name: "パンケーキとベーコン",
                recipe: "パンケーキ: パンケーキミックスを使って調理します。ベーコン: フライパンで焼きます。"
            },
            {
                name: "シリアルとミルク",
                recipe: "シリアル: お好みのシリアルをボウルに入れ、ミルクを注ぎます。"
            }
        ],
        "中華": [
            {
                name: "お粥とザーサイ",
                recipe: "お粥: 米を多めの水で煮ます。ザーサイ: 刻んで添えます。"
            },
            {
                name: "中華風卵焼きと野菜炒め",
                recipe: "中華風卵焼き: 卵を溶いて塩と胡椒で味付けし、フライパンで焼きます。野菜炒め: 好きな野菜を中華調味料で炒めます。"
            },
            {
                name: "中華風蒸しパン（饅頭）",
                recipe: "市販の饅頭を蒸します。"
            },
            {
                name: "揚げパンと豆乳",
                recipe: "揚げパン: 市販の揚げパンを温めます。豆乳: コップに注ぎます。"
            },
            {
                name: "チャーシューと青菜炒め",
                recipe: "チャーシュー: 市販のチャーシューをスライスします。青菜炒め: 青菜をニンニクと一緒に炒めます。"
            }
        ]
    };

    document.getElementById("suggestButton").addEventListener("click", function() {
        const menuType = document.getElementById("menuType").value;
        const selectedMenu = menus[menuType][Math.floor(Math.random() * menus[menuType].length)];
        
        document.getElementById("menu").textContent = selectedMenu.name;
        document.getElementById("recipe").textContent = selectedMenu.recipe;
    });
});
