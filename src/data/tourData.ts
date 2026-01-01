export type SectionType = 'morning' | 'late-morning' | 'afternoon' | 'late-afternoon';

export interface TourStop {
    id: number;
    name: string;
    lat: number;
    lng: number;
    section: SectionType;
    content: {
        en: StopContent;
        zh: StopContent;
    };
}

export interface StopContent {
    title: string;
    subtitle: string;
    details: DetailSection[];
    highlight: string;
}

export interface DetailSection {
    title: string;
    items: string[];
}

export const stops: TourStop[] = [
    {
        id: 1,
        name: "Cathedral of Our Lady",
        lat: 51.2204,
        lng: 4.4010,
        section: "morning",
        content: {
            en: {
                title: "Cathedral of Our Lady",
                subtitle: "Onze-Lieve-Vrouwekathedraal",
                details: [
                    {
                        title: "History",
                        items: [
                            "Construction began 1352, completed 1521 — 170 years of building",
                            "Became a cathedral (bishop's seat) in 1559 when the Diocese of Antwerp was established",
                            "Survived iconoclasm (1566), French Revolutionary looting (1794), and German occupation (1914)",
                            "The original plan called for two matching towers; only the north tower was completed due to funding issues and changing architectural tastes"
                        ]
                    },
                    {
                        title: "Architecture",
                        items: [
                            "Brabantine Gothic style — characterized by elaborate tracery and vertical emphasis",
                            "North tower reaches 123 meters — tallest church tower in the Low Countries",
                            "Seven-aisled nave stretching 118 meters, supported by 125 columns",
                            "The tower's 'lacework' stonework is remarkably delicate for such massive scale"
                        ]
                    },
                    {
                        title: "Art (Interior — visit Jan 2)",
                        items: [
                            "The Raising of the Cross (1610-11) and The Descent from the Cross (1612-14) — two of Rubens' most dramatic altarpieces",
                            "Both paintings demonstrate Rubens' mastery of diagonal composition and theatrical lighting",
                            "The Descent was commissioned by the Guild of Arquebusiers; the Raising originally belonged to St. Walburga's Church"
                        ]
                    }
                ],
                highlight: "At the Handschoenmarkt (Glove Market) in front, the Brabo Fountain depicts Antwerp's founding legend: the Roman soldier Silvius Brabo cutting off the giant Antigoon's hand and throwing it in the Scheldt — 'hand werpen' (hand throwing) became 'Antwerpen'."
            },
            zh: {
                title: "聖母大教堂",
                subtitle: "Onze-Lieve-Vrouwekathedraal",
                details: [
                    {
                        title: "歷史",
                        items: [
                            "1352年開始建造，1521年完工——歷時170年",
                            "1559年安特衛普教區成立時成為主教座堂",
                            "歷經聖像破壞運動(1566年)、法國大革命掠奪(1794年)和德國占領(1914年)——每次都失去後又收回珍藏",
                            "原計畫建造兩座對稱的塔樓，但因資金問題和建築風格改變，只完成了北塔"
                        ]
                    },
                    {
                        title: "建築",
                        items: [
                            "布拉班特哥德式風格——以精緻的窗花和垂直感為特色",
                            "北塔高123公尺——低地國家最高的教堂塔樓",
                            "七通道中殿長118公尺，由125根柱子支撐",
                            "塔樓的「蕾絲」石雕在如此大的規模下仍保持精緻——注意看那些複雜的尖頂和飛扶壁"
                        ]
                    },
                    {
                        title: "藝術（內部——之後可再訪）",
                        items: [
                            "《豎起十字架》(1610-11) 和《卸下聖體》(1612-14)——魯本斯最戲劇性的兩幅祭壇畫",
                            "兩幅畫作展現了魯本斯對角線構圖和戲劇性光線的精湛技藝",
                            "《卸下聖體》由火槍手行會委託創作；《豎起十字架》原屬聖瓦爾布加教堂"
                        ]
                    }
                ],
                highlight: "前方的手套市場(Handschoenmarkt)有布拉博噴泉，描繪安特衛普的建城傳說：羅馬士兵西爾維斯·布拉博砍下巨人安提岡的手，扔進斯海爾德河——「hand werpen」（丟手）據說就變成了「Antwerpen」（安特衛普）。"
            }
        }
    },
    {
        id: 2,
        name: "Vlaeykensgang",
        lat: 51.2210,
        lng: 4.4000,
        section: "morning",
        content: {
            en: {
                title: "Vlaeykensgang",
                subtitle: "Hidden 16th-century alleyway",
                details: [
                    {
                        title: "History",
                        items: [
                            "Built in 1591 as housing for cobblers and their families",
                            "Named after 'Vlaeykens' — a common surname or possibly derived from 'vlaai' (flat cake)",
                            "Remained working-class housing for centuries; nearly demolished in the 20th century before preservation efforts saved it",
                            "Now contains small restaurants and galleries, but retains its authentic medieval character"
                        ]
                    },
                    {
                        title: "Architecture",
                        items: [
                            "Narrow passage only 1-2 meters wide in places — typical of medieval urban planning where space was precious",
                            "Original cobblestones, some dating to the 16th century",
                            "Small interior courtyards created light wells for the surrounding buildings",
                            "Ivy-covered walls and intimate scale create a stark contrast with the busy streets outside"
                        ]
                    }
                ],
                highlight: "Enter at Oude Koornmarkt 16 — easy to miss if you don't know to look for it. The passage connects to Pelgrimstraat, emerging near the cathedral."
            },
            zh: {
                title: "Vlaeykensgang 小巷",
                subtitle: "16世紀隱密小巷",
                details: [
                    {
                        title: "歷史",
                        items: [
                            "建於1591年，原為鞋匠及其家人的住所",
                            "名稱可能源自「Vlaeykens」這個常見姓氏，或「vlaai」（一種扁平蛋糕）",
                            "數百年來一直是工人階級住宅；20世紀差點被拆除，幸好保護運動救了它",
                            "現在有小餐廳和畫廊，但保留了真實的中世紀特色"
                        ]
                    },
                    {
                        title: "建築",
                        items: [
                            "狹窄通道有些地方只有1-2公尺寬——典型的中世紀城市規劃，空間非常珍貴",
                            "原始鵝卵石，有些可追溯到16世紀",
                            "小內院為周圍建築提供採光",
                            "爬滿常春藤的牆壁和親密的尺度與外面繁忙的街道形成強烈對比"
                        ]
                    }
                ],
                highlight: "入口在 Oude Koornmarkt 16號——如果不知道要找，很容易錯過。通道連接到 Pelgrimstraat，從教堂附近出來。"
            }
        }
    },
    {
        id: 3,
        name: "Grote Markt",
        lat: 51.2213,
        lng: 4.3995,
        section: "morning",
        content: {
            en: {
                title: "Grote Markt",
                subtitle: "Guild houses & City Hall",
                details: [
                    {
                        title: "History",
                        items: [
                            "Commercial heart of Antwerp since medieval times — this is where the city's wealth was displayed and business conducted",
                            "The guild houses represented the economic power of trade associations: coopers, drapers, archers, crossbowmen",
                            "In the 16th century, Antwerp was the richest city in Europe, handling 40% of world trade",
                            "The Spanish Fury (1576) destroyed much of the city; many buildings were rebuilt afterward"
                        ]
                    },
                    {
                        title: "Architecture",
                        items: [
                            "Stadhuis (City Hall): Renaissance masterpiece (1561-65) by Cornelis Floris de Vriendt",
                            "The City Hall's center bay features a dramatic break from the horizontal rhythm",
                            "Guild houses: Each competed for attention with gilded statues, elaborate gables, and symbolic imagery representing their trade",
                            "Look for the Coopers' House (barrel motifs), the Archers' House, and houses with stepped gables vs. curved gables"
                        ]
                    },
                    {
                        title: "Art & Symbolism",
                        items: [
                            "The Brabo Fountain (1887) by Jef Lambeaux — more dramatic than the version at Handschoenmarkt, showing Brabo mid-throw",
                            "Guild house facades function as architectural 'business cards' — each detail communicates the guild's trade"
                        ]
                    }
                ],
                highlight: "The Brabo Fountain (1887) by Jef Lambeaux — more dramatic than the version at Handschoenmarkt, showing Brabo mid-throw"
            },
            zh: {
                title: "大廣場",
                subtitle: "Grote Markt - 行會建築與市政廳",
                details: [
                    {
                        title: "歷史",
                        items: [
                            "中世紀以來安特衛普的商業中心——這裡展示城市財富、進行商業活動",
                            "行會建築代表各行業公會的經濟實力：木桶匠、布商、弓箭手、弩手",
                            "16世紀安特衛普是歐洲最富有的城市，處理40%的世界貿易",
                            "「西班牙狂暴」(1576年)摧毀了城市大部分；許多建築是之後重建的"
                        ]
                    },
                    {
                        title: "建築",
                        items: [
                            "市政廳 (Stadhuis)：文藝復興傑作(1561-65)，由柯尼利斯·弗洛里斯·德·弗里恩特設計",
                            "市政廳中央部分打破水平節奏——注意看徽章和雕像",
                            "行會建築：每棟都以鍍金雕像、精緻山牆和代表行業的象徵圖案競相爭豔",
                            "找找木桶匠行會（桶的圖案）、弓箭手行會，以及階梯形與曲線形山牆"
                        ]
                    },
                    {
                        title: "藝術與象徵",
                        items: [
                            "布拉博噴泉(1887)，傑夫·蘭博作品——比手套市場的版本更戲劇性，展示布拉博正在投擲的瞬間",
                            "行會建築立面就像建築版的「名片」——每個細節都傳達行會的行業"
                        ]
                    }
                ],
                highlight: "布拉博噴泉(1887)，傑夫·蘭博作品——比手套市場的版本更戲劇性，展示布拉博正在投擲的瞬間"
            }
        }
    },
    {
        id: 4,
        name: "Vleeshuis",
        lat: 51.2232,
        lng: 4.3970,
        section: "morning",
        content: {
            en: {
                title: "Vleeshuis",
                subtitle: "Butchers' Hall (1504)",
                details: [
                    {
                        title: "History",
                        items: [
                            "Built 1501-1504 as the guildhall of the butchers — one of the wealthiest and most powerful guilds",
                            "Butchers had a monopoly on meat sales; only they could sell meat, and only here",
                            "The building included a great hall for guild meetings, a chapel, and ground-floor meat stalls",
                            "Now houses the Vleeshuis Museum of music and dance (closed today but reopening)"
                        ]
                    },
                    {
                        title: "Architecture",
                        items: [
                            "Late Gothic with distinctive alternating layers of red brick and white sandstone — creates the striking 'bacon' striped effect",
                            "The layered pattern is both decorative and structural — the sandstone bands help distribute weight",
                            "Steep stepped gables and corner turrets give it a fortress-like appearance",
                            "One of the best-preserved examples of a medieval guild hall in the Low Countries"
                        ]
                    }
                ],
                highlight: "The 'bacon stripes' are uniquely Antwerp — you won't see this pattern repeated elsewhere. The building's fortress-like appearance reflected the butchers' wealth and their need to protect valuable meat stores."
            },
            zh: {
                title: "肉鋪行會大樓",
                subtitle: "Vleeshuis (1504)",
                details: [
                    {
                        title: "歷史",
                        items: [
                            "建於1501-1504年，是肉商行會大樓——最富有、最有權勢的行會之一",
                            "肉商壟斷肉類銷售；只有他們能賣肉，而且只能在這裡賣",
                            "建築包括行會會議大廳、禮拜堂和一樓的肉攤",
                            "現為肉鋪博物館，展示音樂和舞蹈（今天休館）"
                        ]
                    },
                    {
                        title: "建築",
                        items: [
                            "晚期哥德式，獨特的紅磚和白色砂岩交替層——形成醒目的「培根條紋」效果",
                            "層狀圖案既是裝飾性的也是結構性的——砂岩層幫助分散重量",
                            "陡峭的階梯形山牆和角落塔樓使它看起來像堡壘",
                            "低地國家保存最好的中世紀行會大樓之一"
                        ]
                    }
                ],
                highlight: "「培根條紋」是安特衛普獨有的——你在其他地方看不到這種圖案。建築的堡壘般外觀反映了肉商的財富和保護貴重肉品的需求。"
            }
        }
    },
    {
        id: 5,
        name: "Groenplaats",
        lat: 51.2192,
        lng: 4.4010,
        section: "late-morning",
        content: {
            en: {
                title: "Groenplaats",
                subtitle: "Rubens' original burial site",
                details: [
                    {
                        title: "History & Rubens Context",
                        items: [
                            "Originally the Cathedral's graveyard — 'Groenplaats' means 'Green Place,' referring to the grass that once covered the graves",
                            "Rubens was buried here in 1640; his remains were moved inside the Cathedral in 1755 to the family chapel",
                            "The statue (1840) by Willem Geefs shows Rubens in diplomat's attire — he was both painter and ambassador",
                            "Burials ended in 1784 when Emperor Joseph II banned urban cemeteries"
                        ]
                    },
                    {
                        title: "What to Notice",
                        items: [
                            "Stand at the statue and look toward the Cathedral tower — this view connects Rubens to his greatest works inside",
                            "The statue's pedestal shows allegorical figures representing Painting, Architecture, and Fame",
                            "The square's open layout reflects Enlightenment urban planning"
                        ]
                    }
                ],
                highlight: "Rubens died wealthy and celebrated, unlike many artists of his era. His epitaph calls him 'the Apelles of his age' — comparing him to Alexander the Great's court painter, the highest compliment 17th-century art could bestow."
            },
            zh: {
                title: "綠地廣場",
                subtitle: "Groenplaats - 魯本斯原葬地",
                details: [
                    {
                        title: "歷史與魯本斯",
                        items: [
                            "原為教堂墓地——「Groenplaats」意為「綠色的地方」，指曾經覆蓋墳墓的草地",
                            "魯本斯1640年埋葬於此；1755年遺體移入教堂內的家族禮拜堂",
                            "雕像(1840)由威廉·蓋夫斯創作，展示穿著外交官服裝的魯本斯——他既是畫家也是外交官",
                            "1784年約瑟夫二世皇帝禁止城市墓地後停止埋葬"
                        ]
                    },
                    {
                        title: "注意觀察",
                        items: [
                            "站在雕像旁看向教堂塔樓——這個視角連接魯本斯與他在教堂內的傑作",
                            "雕像底座有代表繪畫、建築和榮耀的寓言人物",
                            "廣場的開放布局反映啟蒙時代城市規劃"
                        ]
                    }
                ],
                highlight: "魯本斯去世時既富有又備受讚譽，與當時許多藝術家不同。他的墓誌銘稱他為「當代的阿佩萊斯」——比作亞歷山大大帝的宮廷畫家，這是17世紀藝術界最高的讚譽。"
            }
        }
    },
    {
        id: 6,
        name: "Rubenshuis",
        lat: 51.2153,
        lng: 4.4095,
        section: "late-morning",
        content: {
            en: {
                title: "Rubenshuis",
                subtitle: "Rubens' home & studio (1610-1640)",
                details: [
                    {
                        title: "History",
                        items: [
                            "Purchased by Rubens in 1610 after returning from 8 years in Italy; he lived here until his death in 1640",
                            "Rubens transformed an existing Flemish house into an Italian-style palazzo — designing the renovations himself",
                            "This was both home and 'painting factory' — Rubens employed numerous assistants including Anthony van Dyck and Jacob Jordaens",
                            "After Rubens' death, the house changed hands and was heavily modified; the city acquired it in 1937"
                        ]
                    },
                    {
                        title: "Architecture",
                        items: [
                            "The Portico: The ornate Baroque gateway connecting house to studio — one of the few original elements to survive",
                            "The portico features three arched openings, with sculptures representing Mercury and Minerva",
                            "The garden pavilion at the back was inspired by Italian Renaissance villas"
                        ]
                    },
                    {
                        title: "Art Context",
                        items: [
                            "Rubens produced an estimated 1,400 paintings here, with workshop assistance",
                            "The studio had large windows (facing north for consistent light) and high ceilings to accommodate massive canvases"
                        ]
                    }
                ],
                highlight: "The historic residence is under renovation until 2030, but the garden and Rubens Experience are accessible (closed Jan 1). The new entrance is at Hopland 13."
            },
            zh: {
                title: "魯本斯故居",
                subtitle: "Rubenshuis (1610-1640)",
                details: [
                    {
                        title: "歷史",
                        items: [
                            "1610年魯本斯從義大利回來後購買；他在此居住直到1640年去世",
                            "魯本斯將現有的佛蘭德斯房屋改造成義大利式宮殿——親自設計翻新",
                            "這裡既是住所也是「繪畫工廠」——魯本斯雇用眾多助手",
                            "魯本斯去世後，房屋多次易主並經過大幅改建；1937年市政府收購"
                        ]
                    },
                    {
                        title: "建築",
                        items: [
                            "門廊：連接住宅和工作室的華麗巴洛克大門——少數倖存的原始元素之一",
                            "門廊有三個拱形開口，上方有代表墨丘利和密涅瓦（商業和智慧）的雕塑",
                            "後方的花園涼亭受義大利文藝復興別墅啟發"
                        ]
                    },
                    {
                        title: "藝術背景",
                        items: [
                            "魯本斯在此創作了估計1,400幅畫作，有工作室助手協助",
                            "工作室有大窗戶（朝北以獲得穩定光線）和高天花板以容納大型畫布"
                        ]
                    }
                ],
                highlight: "歷史建築正在翻修中，預計2030年完工，但花園和魯本斯體驗區可參觀（1月1日休館）。新入口在 Hopland 13號。"
            }
        }
    },
    {
        id: 7,
        name: "Sint-Carolus Borromeus",
        lat: 51.2220,
        lng: 4.4040,
        section: "afternoon",
        content: {
            en: {
                title: "Sint-Carolus Borromeus",
                subtitle: "Baroque Jesuit church (1621)",
                details: [
                    {
                        title: "History",
                        items: [
                            "Built 1615-1621 by the Jesuits as part of the Counter-Reformation",
                            "Rubens was closely involved in the design, particularly the facade and tower",
                            "Originally had 39 ceiling paintings by Rubens — all destroyed by lightning fire in 1718",
                            "Named after Carlo Borromeo, the Counter-Reformation archbishop of Milan"
                        ]
                    },
                    {
                        title: "Architecture",
                        items: [
                            "The facade is considered one of the finest Baroque facades in the Low Countries",
                            "Three-story design with dramatic interplay of columns, pilasters, and broken pediments",
                            "The tower combines Baroque and Gothic elements",
                            "The interior uses marble, gilt, and dramatic lighting to create emotional impact"
                        ]
                    }
                ],
                highlight: "Jan 1 Note: Church only open for Mass. But Hendrik Conscienceplein, the square in front, is one of the most photogenic spots in Antwerp."
            },
            zh: {
                title: "聖卡洛斯·波羅梅奧教堂",
                subtitle: "Sint-Carolus Borromeus - 巴洛克耶穌會教堂 (1621)",
                details: [
                    {
                        title: "歷史",
                        items: [
                            "1615-1621年由耶穌會建造，作為反宗教改革的一部分",
                            "魯本斯密切參與設計，特別是立面和塔樓",
                            "原有39幅魯本斯天花板畫——1718年閃電引發火災全部燒毀",
                            "以反宗教改革的米蘭大主教卡洛·波羅梅奧命名"
                        ]
                    },
                    {
                        title: "建築",
                        items: [
                            "立面被認為是低地國家最精美的巴洛克立面之一",
                            "三層設計，柱子、壁柱和破碎山花戲劇性地交織",
                            "塔樓結合巴洛克和哥德元素",
                            "內部使用大理石、鍍金和戲劇性光線創造情感衝擊"
                        ]
                    }
                ],
                highlight: "1月1日提醒：教堂僅在彌撒時間開放。但前方的亨德里克·康西昂斯廣場是安特衛普最上相的地點之一。"
            }
        }
    },
    {
        id: 8,
        name: "Het Steen & Scheldt",
        lat: 51.2240,
        lng: 4.3960,
        section: "afternoon",
        content: {
            en: {
                title: "Het Steen & Scheldt Riverfront",
                subtitle: "Medieval fortress & the river that built Antwerp",
                details: [
                    {
                        title: "Het Steen — The Fortress",
                        items: [
                            "The oldest building in Antwerp — parts date to the 10th century",
                            "Originally a fortress protecting the river crossing; later served as a prison",
                            "The relief above the entrance (1520) shows Semini, a Scandinavian fertility god"
                        ]
                    },
                    {
                        title: "The Scheldt — Antwerp's Lifeline",
                        items: [
                            "The Scheldt River made Antwerp — navigable from the North Sea",
                            "By the 16th century, Antwerp was the busiest port in the world",
                            "The Dutch blockade of the Scheldt (1585-1863) devastated the city's economy"
                        ]
                    }
                ],
                highlight: "Stand on the terrace and look north toward the port — you're seeing the continuation of 1,000+ years of river trade."
            },
            zh: {
                title: "斯滕城堡與斯海爾德河",
                subtitle: "中世紀堡壘與造就安特衛普的河流",
                details: [
                    {
                        title: "斯滕城堡 — 堡壘",
                        items: [
                            "安特衛普最古老的建築——部分可追溯至10世紀",
                            "原為保護渡口的堡壘；後做為監獄",
                            "入口上方的浮雕(1520)展示了北歐豐饒之神 Semini"
                        ]
                    },
                    {
                        title: "斯海爾德河 — 安特衛普的生命線",
                        items: [
                            "斯海爾德河造就了安特衛普——可通往北海",
                            "16世紀時，安特衛普是世界上最繁忙的港口",
                            "荷蘭對斯海爾德河的封鎖(1585-1863)曾重創城市經濟"
                        ]
                    }
                ],
                highlight: "站在平台上向北看港口——你看到的是延續了1000多年的河流貿易。"
            }
        }
    },
    {
        id: 9,
        name: "MAS & Het Eilandje",
        lat: 51.2295,
        lng: 4.4045,
        section: "afternoon",
        content: {
            en: {
                title: "MAS & Het Eilandje",
                subtitle: "Museum aan de Stroom & old docks",
                details: [
                    {
                        title: "History",
                        items: [
                            "Het Eilandje ('Little Island') was Antwerp's 19th-century port district",
                            "Declined in the 20th century; redeveloped since the 2000s",
                            "The MAS opened in 2011, designed to tell the story of Antwerp's connection to the world"
                        ]
                    },
                    {
                        title: "Architecture",
                        items: [
                            "MAS building: Designed by Neutelings Riedijk (2011) — 60 meters tall",
                            "The stacked, rotating volumes evoke shipping containers or hands",
                            "The facade includes 3,185 cast aluminum hands"
                        ]
                    }
                ],
                highlight: "Jan 1 Note: MAS is completely closed on New Year's Day. Still worth walking around the building exterior to see the architecture and the hand motifs."
            },
            zh: {
                title: "MAS 博物館與小島區",
                subtitle: "Museum aan de Stroom & 舊碼頭",
                details: [
                    {
                        title: "歷史",
                        items: [
                            "小島區是安特衛普19世紀的港口區",
                            "20世紀衰退；2000年代起重新開發",
                            "MAS 於2011年開幕，旨在講述安特衛普與世界的連結"
                        ]
                    },
                    {
                        title: "建築",
                        items: [
                            "MAS 建築：由 Neutelings Riedijk 設計(2011)——高60公尺",
                            "堆疊、旋轉的體量喚起貨櫃或手（安特衛普標誌）的意象",
                            "立面包含3,185隻鑄鋁手"
                        ]
                    }
                ],
                highlight: "1月1日提醒：MAS 在元旦完全關閉。仍然值得繞著建築外部走走，欣賞建築和手的圖案。"
            }
        }
    },
    {
        id: 10,
        name: "KMSKA",
        lat: 51.2070,
        lng: 4.3960,
        section: "late-afternoon",
        content: {
            en: {
                title: "KMSKA (Exterior)",
                subtitle: "Royal Museum of Fine Arts",
                details: [
                    {
                        title: "History",
                        items: [
                            "Founded 1810 under Napoleon; the current building opened 1890",
                            "Collection began with artworks owned by the Antwerp Guild of Saint Luke",
                            "Closed 2011-2022 for major renovation"
                        ]
                    },
                    {
                        title: "Architecture",
                        items: [
                            "Neoclassical design by Jean-Jacques Winders and Frans Van Dijk",
                            "The 2022 renovation by KAAN Architects added a modern wing"
                        ]
                    }
                ],
                highlight: "The facade features bronze horse-drawn chariots by Thomas Vinçotte at the roofline."
            },
            zh: {
                title: "皇家美術館 (外觀)",
                subtitle: "KMSKA",
                details: [
                    {
                        title: "歷史",
                        items: [
                            "1810年在拿破崙統治下成立；現址於1890年開放",
                            "收藏始於安特衛普聖路加行會擁有的藝術品",
                            "2011-2022年關閉進行重大翻修"
                        ]
                    },
                    {
                        title: "建築",
                        items: [
                            "由 Jean-Jacques Winders 和 Frans Van Dijk 設計的新古典主義風格",
                            "2022年由 KAAN Architects 進行的翻修增加了一個現代側翼"
                        ]
                    }
                ],
                highlight: "立面屋頂線上有 Thomas Vinçotte 創作的青銅馬車雕像。"
            }
        }
    },
    {
        id: 11,
        name: "Het Zuid",
        lat: 51.2090,
        lng: 4.4000,
        section: "late-afternoon",
        content: {
            en: {
                title: "Het Zuid Neighborhood",
                subtitle: "19th-century boulevards & galleries",
                details: [
                    {
                        title: "History",
                        items: [
                            "Developed in the late 19th century after the demolition of the old Spanish citadel",
                            "Designed as a bourgeois residential quarter with wide boulevards",
                            "Now Antwerp's gallery district"
                        ]
                    },
                    {
                        title: "Architecture",
                        items: [
                            "Leopold de Waelplaats and surrounding streets show eclectic 19th-century styles",
                            "The Gedempte Zuiderdokken create a long, linear park space"
                        ]
                    }
                ],
                highlight: "Good area for dinner — more local and less touristy than Grote Markt. Wander and see what appeals."
            },
            zh: {
                title: "南區 (Het Zuid)",
                subtitle: "19世紀大道與畫廊",
                details: [
                    {
                        title: "歷史",
                        items: [
                            "19世紀末在拆除舊西班牙城堡後開發",
                            "設計為擁有寬闊大道的中產階級住宅區",
                            "現在是安特衛普的畫廊區"
                        ]
                    },
                    {
                        title: "建築",
                        items: [
                            "Leopold de Waelplaats 和周圍街道展示了折衷的19世紀風格",
                            "填平的南碼頭創造了長條形的線性公園空間"
                        ]
                    }
                ],
                highlight: "適合晚餐的區域——比大廣場更在地，觀光客較少。隨意漫步看看有什麼吸引你的。"
            }
        }
    },
    {
        id: 12,
        name: "Antwerp Centraal",
        lat: 51.2172,
        lng: 4.4212,
        section: "late-afternoon",
        content: {
            en: {
                title: "Antwerp Centraal Station",
                subtitle: "The 'Railway Cathedral'",
                details: [
                    {
                        title: "History",
                        items: [
                            "Built 1895-1905 to replace an earlier wooden station",
                            "King Leopold II was closely involved, wanting a statement of Belgian prestige"
                        ]
                    },
                    {
                        title: "Architecture",
                        items: [
                            "Eclectic style combining Neo-Baroque, Neo-Renaissance, and Beaux-Arts influences",
                            "The main hall features a massive dome (75 meters high)",
                            "The iron and glass train hall spans the platforms without intermediate supports"
                        ]
                    }
                ],
                highlight: "Even if you're not taking a train, walk inside to see the main hall. The dramatic interior rivals many cathedrals."
            },
            zh: {
                title: "安特衛普中央車站",
                subtitle: "「鐵路大教堂」",
                details: [
                    {
                        title: "歷史",
                        items: [
                            "建於1895-1905年，取代早期的木造車站",
                            "利奧波德二世國王密切參與，希望展現比利時的威望"
                        ]
                    },
                    {
                        title: "建築",
                        items: [
                            "結合新巴洛克、新文藝復興和美術學院派影響的折衷風格",
                            "大廳有一個巨大的圓頂（75公尺高）",
                            "鐵和玻璃的火車大廳跨越月台，中間沒有支撐"
                        ]
                    }
                ],
                highlight: "即使不搭火車，也要走進去看大廳。戲劇性的內部與許多大教堂不相上下。"
            }
        }
    }
];
