// Travel Nature and Color Mapping Table
var travelNatureColors = {
  "Official Investigation": "#ff6b6b",      // Red - Most important official activity
  "Diplomatic Mission": "#4ecdc4",      // Cyan - Diplomatic activity
  "Private Travel": "#45b7d1",        // Blue - Personal activity
  "Accompanying Investigation": "#96ceb4",      // Green - Accompanying investigation
  "Official Survey": "#feca57",      // Yellow - Survey activity
  "Accompanying Mission": "#ff9ff3",      // Pink - Accompanying mission
  "Official Observation": "#54a0ff",      // Sky blue - Observation activity
  "Private Study Abroad": "#5f27cd",      // Purple - Study abroad activity
  "Official Escort": "#00d2d3",      // Cyan green - Escort task
  "Official Conference": "#ff9f43",      // Orange - Conference activity
  "Official Attendant": "#10ac84",      // Dark green - Attendant status
  "Family Accompanying": "#ee5a24",      // Dark orange - Family activity
  "Missionary/Translation": "#0984e3",     // Dark blue - Missionary activity
  "Military Translator": "#a29bfe",      // Light purple - Military translation
  "Accompanying Internship": "#fd79a8",      // Light pink - Internship activity
  "Travel": "#fdcb6e",          // Light yellow - General travel
  "Official": "#6c5ce7"           // Purple - Official status
};

// Function to get travel nature based on travelogue name
function getTravelNature(travelogueName) {
  var natureMap = {
    // Official Investigation
    "Travel Notes of Japan in Bingwu Year - Cheng Yu": "Official Investigation",
    "Records of Eastern Travel - Wu Rulun": "Official Investigation",
    "Diary of Eastern Travel - Yan Xiu": "Official Investigation",
    "Diary of Observing Military Exercises in Japan - Ding Hongchen": "Official Observation",
    "Diary of Eastern Travel from Yuzhai - Sheng Xuanhuai": "Official Investigation",
    "Diary of Eastern Travel from Yue'an - Ling Wenyuan": "Official Investigation",
    "Diary of Agricultural Investigation - Huang Jing": "Official Investigation",
    "Diary of Commercial Investigation - Liu Xuexun": "Official Investigation",
    "Diary of Political Investigation - Zai Ze": "Official Investigation",
    "Miscellaneous Notes from Overseas - Cai Jun": "Official Investigation",
    "Travel Diary - Chen Qi": "Official Investigation",
    "Travel Notes of Eighteen Countries - Jin Shaocheng": "Official Investigation",
    "Supplementary Records of Travel in Japan - Fu Yunlong": "Official Investigation",
    "Supplementary Records of Travel in USA and Canada - Fu Yunlong": "Official Investigation",
    "Travel Observations - Hong Xun": "Official Investigation",
    "Diary of British Mission - Zai Zhen": "Official Investigation",
    "Records of Overseas Travel - Wang Zhichun": "Official Investigation",
    "Diary of Eastern Travel - Zhou Xuexi": "Official Investigation",
    "Diary of Eastern Travel - Zuo Xiangzhong": "Official Investigation",
    "Diary of Eastern Travel - Wen Kai": "Official Investigation",
    "Diary of Eastern Travel - Yang Taijie": "Official Investigation",
    "Diary of Eastern Travel - Shen Yiqing": "Official Investigation",
    "Diary of Eastern Travel - Huang Qingcheng": "Private Travel",
    "New Records of Traveling Around the World - Li Gui": "Official Conference",
    "Notes on Raft Journey and Poems - Bin Chun": "Official Investigation",
    
    // Diplomatic Mission
    "Diary of Three Continents - Zhang Yinhuan": "Diplomatic Mission",
    "Fifth Account of Wonders - Zhang Deyi": "Diplomatic Mission",
    "Sixth Account of Wonders - Zhang Deyi": "Diplomatic Mission",
    "Poems from Eastern Mission - Zhang Sigui": "Diplomatic Mission",
    "Brief Account and Miscellaneous Poems from Eastern Mission - He Ruzhang": "Diplomatic Mission",
    "Draft of Russian Mission - Wang Zhichun": "Diplomatic Mission",
    "Brief Account of American Mission - Chen Lanbin": "Diplomatic Mission",
    "Diary of Mission to Nine Countries - Dai Hongci": "Official Investigation",
    "Diary of Mission to Britain, France, Italy and Belgium - Xue Fucheng": "Diplomatic Mission",
    "First Mission to the West - Zhigang": "Diplomatic Mission",
    "Diary of German Mission - Li Fengbao": "Diplomatic Mission",
    "Diary of Mission to USA, Japan and Peru - Cui Guoyin": "Diplomatic Mission",
    "Records of Accompanying Mission to France - Zhang Deyi": "Accompanying Mission",
    "Records of Accompanying Mission to Britain and Russia - Zhang Deyi": "Accompanying Mission",
    "Notes from Accompanying Mission - Wu Zonglian": "Diplomatic Mission",
    "Private Notes from British Mission - Liu Xihong": "Diplomatic Mission",
    "Western Magazine - Li Shuchang": "Diplomatic Mission",
    "Records of Li Hongzhang's Visits to Europe and America - Cai Erkang et al.": "Official Attendant",
    "Miscellaneous Notes on Cuba - Tan Qianchu": "Official Survey",
    "Travel Notes of Japan - Li Xiaopu": "Official Investigation",
    
    // Private Travel
    "Miscellaneous Notes from the East - Li Junzhi": "Private Travel",
    "Compilation of Russian Travel - Miao Yousun": "Private Travel",
    "Travel Notes of Germany and Other Countries - Kang Youwei": "Private Travel",
    "Travel Notes of Britain - Kang Youwei": "Private Travel",
    "Travel Notes of Spain and Other Countries - Kang Youwei": "Private Travel",
    "Two Travel Notes of Eleven European Countries - Kang Youwei": "Private Travel",
    "New World Travel Notes and Others - Liang Qichao": "Private Travel",
    "Two Months in Japan - Luo Zhenyu": "Private Travel",
    "Second Travel to Japan - Luo Zhenyu": "Private Travel",
    "Travel Notes of Japan - Wang Tao": "Private Travel",
    "Random Travel Records - Wang Tao": "Private Travel",
    "Compilation of Japanese Travel - Miao Quansun": "Private Travel",
    "Notes of Japanese Travel - Wang Jingxi": "Private Travel",
    "Brief Knowledge of Japan - Shuang Shou": "Private Travel",
    "Records of Western Journey - Zou Daijun": "Private Travel",
    "Travel Notes of Western Seas - Lin Zhen": "Private Travel",
    "Maritime Records - Xie Qinggao": "Private Travel",
    "My Life in China and America - Yung Wing": "Private Study Abroad",
    
    // Accompanying Investigation
    "Records of Western Seas Journey - Pan Feisheng": "Accompanying Investigation",
    "Bamboo Branch Songs of Berlin - Pan Feisheng": "Accompanying Investigation",
    "Records of Return from Beyond the Sky - Pan Feisheng": "Accompanying Investigation",
    "Diary of Tower Ship - Yu Siyi": "Accompanying Investigation",
    "Diary from Daoxizhai - Wang Yongni": "Accompanying Investigation",
    "Random Notes of European Travel - Qian Depei": "Accompanying Investigation",
    "Miscellaneous Records of European Travel - Xu Jianyin": "Accompanying Investigation",
    "Notes of Accompanying Political Investigation - Jin Ding": "Accompanying Investigation",
    
    // Others
    "Daily Talks of a Sea Traveler - Wang Zhi": "Official Survey",
    "Diary of American Travel - Qi Zhaoxi": "Official Escort",
    "Poems of Paris - Wang Yixuan": "Private Travel",
    "Diary of Japan - Luo Sen": "Military Translator",
    "Marvelous Accounts of Sea Voyage - Zhang Deyi": "Accompanying Internship",
    "Remaining Travel Notes - Feng Ling": "Official Survey",
    "Travel Notes of Guimao Year and Return Records - Qian Danshili": "Family Accompanying"
  };
  
  return natureMap[travelogueName] || "Private Travel";
}

// 根据出游性质获取颜色的函数
function getColorByTravelNature(travelogueName) {
  var nature = getTravelNature(travelogueName);
  return travelNatureColors[nature] || "#6c5ce7"; // 默认紫色
}

// 路径可见性控制
var pathVisibility = {};
var chartInstance = null;

// 初始化所有路径为可见
function initializePathVisibility() {
  for (var i = 0; i < pathGroups.length; i++) {
    var group = pathGroups[i];
    var nature = getTravelNature(group.name);
    if (!pathVisibility[nature]) {
      pathVisibility[nature] = true; // 默认可见
    }
  }
}

// 切换路径可见性
function togglePathVisibility(nature) {
  pathVisibility[nature] = !pathVisibility[nature];
  updateChart();
}

// 更新图表显示
function updateChart() {
  if (!chartInstance) return;
  
  var visiblePaths = [];
  var visibleNodes = [];
  var visibleEdges = [];
  
  // 筛选可见的路径
  for (var i = 0; i < pathGroups.length; i++) {
    var group = pathGroups[i];
    var nature = getTravelNature(group.name);
    if (pathVisibility[nature]) {
      visiblePaths.push(group);
    }
  }
  
  // 重新构建节点和边
  var allNodes = [];
  var allEdges = [];
  
  for (var i = 0; i < visiblePaths.length; i++) {
    var group = visiblePaths[i];
    var coordinates = group.coordinates;
    
    for (var j = 0; j < coordinates.length; j++) {
      var coord = coordinates[j];
      var nodeName = coord[2];
      if (nodeName && nodeName.includes('-')) {
        var parts = nodeName.split('-');
        if (parts.length >= 2) {
          var cityName = parts[0];
          var countryName = parts[1];
          var nodeId = cityName + '-' + countryName;
          
          // 检查节点是否已存在
          var existingNode = allNodes.find(function(n) { return n.name === nodeId; });
          if (!existingNode) {
            allNodes.push({
              name: nodeId,
              value: [coord[0], coord[1]],
              originalName: nodeName,
              symbolSize: 8,
              itemStyle: {
                color: '#ff6b6b'
              }
            });
          }
        }
      }
    }
    
    // 构建边
    for (var j = 0; j < coordinates.length - 1; j++) {
      var coord1 = coordinates[j];
      var coord2 = coordinates[j + 1];
      var name1 = coord1[2];
      var name2 = coord2[2];
      
      if (name1 && name1.includes('-') && name2 && name2.includes('-')) {
        var parts1 = name1.split('-');
        var parts2 = name2.split('-');
        if (parts1.length >= 2 && parts2.length >= 2) {
          var nodeId1 = parts1[0] + '-' + parts1[1];
          var nodeId2 = parts2[0] + '-' + parts2[1];
          
          allEdges.push({
            source: nodeId1,
            target: nodeId2,
            pathGroupIndex: i,
            groupIndex: i,
            lineStyle: {
              color: group.color,
              width: 2
            }
          });
        }
      }
    }
  }
  
  // 更新图表
  var option = chartInstance.getOption();
  option.series[0].data = allNodes;
  option.series[1].data = allEdges;
  chartInstance.setOption(option);
}

// 为路径组分配基于出游性质的颜色
function assignColorsToPaths(pathGroups) {
  for (var i = 0; i < pathGroups.length; i++) {
    pathGroups[i].color = getColorByTravelNature(pathGroups[i].name);
  }
}

// 多组路径数据
var pathGroups = [
  {
    "name": "Diary of Three Continents - Zhang Yinhuan",
    "color": "#4ecdc4",
    "coordinates": [
      [
        114.1694,
        22.3193,
        "Hong Kong - China - February 8, Guangxu 12th Year (1886)"
      ],
      [
        -122.4194,
        37.7749,
        "San Francisco - USA - March 4, Guangxu 12th Year (1886)"
      ],
      [
        2.3522,
        48.8566,
        "Paris - France - April 10, Guangxu 13th Year (1887)"
      ],
      [
        -3.7038,
        40.4168,
        "Madrid - Spain - April 24, Guangxu 13th Year (1887)"
      ],
      [
        -0.1276,
        51.5072,
        "London - UK - June 12, Guangxu 13th Year (1887)"
      ],
      [
        -75.0152,
        -9.1899,
        "Lima - Peru - May 11, Guangxu 14th Year (1888)"
      ],
      [
        -82.3666,
        23.1136,
        "Havana - Cuba - December 29, Guangxu 14th Year (1888)"
      ],
      [
        114.1694,
        22.3193,
        "Hong Kong - China - November 13, Guangxu 15th Year (1889)"
      ]
    ]
  },
  {
    "name": "Travel Notes of Japan in Bingwu Year - Cheng Yu",
    "color": "#ff6b6b",
    "coordinates": [
      [
        121.4737,
        31.2304,
        "Shanghai - China - August 17, Guangxu 32nd Year (1906)"
      ],
      [
        129.8738,
        32.7503,
        "Nagasaki - Japan - August 19"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - October 24"
      ]
    ]
  },
  {
    "name": "Records of Eastern Travel - Wu Rulun",
    "color": "#ff6b6b",
    "coordinates": [
      [
        116.4074,
        39.9042,
        "Beijing - China - May 3"
      ],
      [
        129.8738,
        32.7503,
        "Nagasaki - Japan - May 15"
      ],
      [
        135.1955,
        34.6901,
        "Kobe - Japan - May 17"
      ],
      [
        135.7681,
        35.0116,
        "Kyoto - Japan - May 19"
      ],
      [
        139.6917,
        35.6895,
        "Tokyo - Japan - May 22"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - September 21"
      ]
    ]
  },
  {
    "name": "Diary of Eastern Travel - Yan Xiu",
    "color": "#ff6b6b",
    "coordinates": [
      [
        117.201,
        39.0842,
        "Tianjin - China - July 7, Guangxu 28th Year (1902)"
      ],
      [
        135.5023,
        34.6937,
        "Osaka - Japan - July 13, Guangxu 28th Year (1902)"
      ],
      [
        139.6917,
        35.6895,
        "Tokyo - Japan - August 3, Guangxu 28th Year (1902)"
      ],
      [
        139.6917,
        35.6895,
        "Tokyo - Japan - September 14, Guangxu 28th Year (1902)"
      ],
      [
        135.5023,
        34.6937,
        "Osaka - Japan - September 23, Guangxu 28th Year (1902)"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - September 29, Guangxu 28th Year (1902)"
      ],
      [
        117.201,
        39.0842,
        "Tianjin - China - October 28, Guangxu 28th Year (1902)"
      ],
      [
        117.201,
        39.0842,
        "Tianjin - China - April 7, Guangxu 30th Year (1904)"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - April 11, Guangxu 30th Year (1904)"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - April 14, Guangxu 30th Year (1904)"
      ],
      [
        129.8738,
        32.7503,
        "Nagasaki - Japan - April 16, Guangxu 30th Year (1904)"
      ],
      [
        139.6917,
        35.6895,
        "Tokyo - Japan - April 19, Guangxu 30th Year (1904)"
      ],
      [
        139.638,
        35.4437,
        "Yokohama - Japan - June 27, Guangxu 30th Year (1904)"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - July 3, Guangxu 30th Year (1904)"
      ],
      [
        117.201,
        39.0842,
        "Tianjin - China - July 11, Guangxu 30th Year (1904)"
      ],
      [
        117.201,
        39.0842,
        "Tianjin - China - March 8, Guangxu 29th Year (1903)"
      ],
      [
        126.978,
        37.5665,
        "Seoul - South Korea - March 11, Guangxu 29th Year (1903)"
      ],
      [
        129.8738,
        32.7503,
        "Nagasaki - Japan - March 16, Guangxu 29th Year (1903)"
      ],
      [
        135.1955,
        34.6901,
        "Kobe - Japan - March 18, Guangxu 29th Year (1903)"
      ],
      [
        121.3914,
        37.54,
        "Yantai - China - May 6, Guangxu 29th Year (1903)"
      ],
      [
        117.201,
        39.0842,
        "Tianjin - China - May 9, Guangxu 29th Year (1903)"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - September 3, Guangxu 25th Year (1899)"
      ],
      [
        129.8738,
        32.7503,
        "Nagasaki - Japan - September 5, Guangxu 25th Year (1899)"
      ],
      [
        139.6917,
        35.6895,
        "Tokyo - Japan - September 10, Guangxu 25th Year (1899)"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - November 11, Guangxu 25th Year (1899)"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - December 20, Guangxu 32nd Year (1906)"
      ],
      [
        129.8738,
        32.7503,
        "Nagasaki - Japan - December 22, Guangxu 32nd Year (1906)"
      ],
      [
        139.6917,
        35.6895,
        "Tokyo - Japan - December 25, Guangxu 32nd Year (1906)"
      ],
      [
        135.5023,
        34.6937,
        "Osaka - Japan - March 22, Guangxu 33rd Year (1907)"
      ],
      [
        129.8738,
        32.7503,
        "Nagasaki - Japan - April 4, Guangxu 33rd Year (1907)"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - April 6, Guangxu 33rd Year (1907)"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - December 23, Guangxu 32nd Year (1906)"
      ],
      [
        129.8738,
        32.7503,
        "Nagasaki - Japan - December 25, Guangxu 32nd Year (1906)"
      ],
      [
        139.6917,
        35.6895,
        "Tokyo - Japan - December 28, Guangxu 32nd Year (1906)"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - March 26, Guangxu 33rd Year (1907)"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - February 26, Guangxu 33rd Year (1907)"
      ],
      [
        129.8738,
        32.7503,
        "Nagasaki - Japan - February 27, Guangxu 33rd Year (1907)"
      ],
      [
        139.6917,
        35.6895,
        "Tokyo - Japan - February 30, Guangxu 33rd Year (1907)"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - April 2, Guangxu 33rd Year (1907)"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - April 28, Guangxu 34th Year (1908)"
      ],
      [
        129.8738,
        32.7503,
        "Nagasaki - Japan - May 1, Guangxu 34th Year (1908)"
      ],
      [
        139.76,
        35.666,
        "Shinbashi - Japan - May 3, Guangxu 34th Year (1908)"
      ],
      [
        117.201,
        39.0842,
        "Tianjin - China - August 8, Guangxu 34th Year (1908)"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - May 4, Guangxu 19th Year (1893)"
      ],
      [
        129.872,
        32.7503,
        "Nagasaki - Japan - May 6, Guangxu 19th Year (1893)"
      ],
      [
        135.1955,
        34.6937,
        "Kobe - Japan - May 15, Guangxu 19th Year (1893)"
      ],
      [
        139.638,
        35.4437,
        "Yokohama - Japan - May 17, Guangxu 19th Year (1893)"
      ],
      [
        139.6917,
        35.6895,
        "Tokyo - Japan - May 18, Guangxu 19th Year (1893)"
      ],
      [
        139.638,
        35.4437,
        "Yokohama - Japan - June 4, Guangxu 19th Year (1893)"
      ],
      [
        135.768,
        35.0116,
        "Kyoto - Japan - June 22, Guangxu 19th Year (1893)"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - July 4, Guangxu 19th Year (1893)"
      ]
    ]
  },
  {
    "name": "Brief Knowledge of Japan - Shuang Shou",
    "color": "#45b7d1",
    "coordinates": [
      [
        139.6917,
        35.6895,
        "Tokyo - Japan - May 25, Guangxu 28th Year (1902)"
      ],
      [
        139.6917,
        35.6895,
        "Tokyo - Japan - June 20, Guangxu 28th Year (1902)"
      ],
      [
        139.6917,
        35.6895,
        "Tokyo - Japan - June 24, Guangxu 28th Year (1902)"
      ],
      [
        139.6917,
        35.6895,
        "Tokyo - Japan - August 15, Guangxu 28th Year (1902)"
      ]
    ]
  },
  {
    "name": "Diary of Observing Military Exercises in Japan - Ding Hongchen",
    "color": "#54a0ff",
    "coordinates": [
      [
        121.4737,
        31.2304,
        "Shanghai - China - August 27, Guangxu 25th Year (1899)"
      ],
      [
        129.8738,
        32.7503,
        "Nagasaki - Japan - August 29, Guangxu 25th Year (1899)"
      ],
      [
        139.6917,
        35.6895,
        "Tokyo - Japan - September 8, Guangxu 25th Year (1899)"
      ],
      [
        129.8738,
        32.7503,
        "Nagasaki - Japan - November 9, Guangxu 25th Year (1899)"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - November 11, Guangxu 25th Year (1899)"
      ]
    ]
  },
  {
    "name": "Miscellaneous Notes from the East - Li Junzhi",
    "color": "#45b7d1",
    "coordinates": [
      [
        117.201,
        39.0842,
        "Tianjin - China - Early October, Guangxu 31st Year (1905)"
      ],
      [
        135.1955,
        34.6901,
        "Kobe - Japan - About 6 days in October, Guangxu 31st Year (1905)"
      ],
      [
        117.201,
        39.0842,
        "Tianjin - China - Around May, Guangxu 31st Year (1905)"
      ]
    ]
  },
  {
    "name": "Notes on Raft Journey and Poems - Bin Chun",
    "color": "#ff6b6b",
    "coordinates": [
      [
        116.4074,
        39.9042,
        "Beijing - China - January 8, Tongzhi 5th Year (1866)"
      ],
      [
        116.4074,
        39.9042,
        "Beijing - China - January 21, Tongzhi 5th Year (1866)"
      ],
      [
        117.1901,
        39.1072,
        "Tianjin - China - 27th, Tongzhi 5th Year (1866)"
      ],
      [
        32.5568,
        29.9834,
        "Suez - Egypt - March 10, Tongzhi 5th Year (1866)"
      ],
      [
        5.3698,
        43.2965,
        "Marseille - France - March 18, Tongzhi 5th Year (1866)"
      ],
      [
        2.3522,
        48.8566,
        "Paris - France - March 22, Tongzhi 5th Year (1866)"
      ],
      [
        -0.1276,
        51.5074,
        "London - UK - April 4, Tongzhi 5th Year (1866)"
      ],
      [
        -1.2577,
        51.752,
        "Oxford - UK - April 25, Tongzhi 5th Year (1866)"
      ],
      [
        -1.8904,
        52.4862,
        "Birmingham - UK - April 26, Tongzhi 5th Year (1866)"
      ],
      [
        -2.2426,
        53.4808,
        "Manchester - UK - April 28, Tongzhi 5th Year (1866)"
      ],
      [
        -0.1276,
        51.5074,
        "London - UK - April 30, Tongzhi 5th Year (1866)"
      ],
      [
        4.9041,
        52.3676,
        "Amsterdam - Netherlands - May 13, Tongzhi 5th Year (1866)"
      ],
      [
        9.9937,
        53.5511,
        "Hamburg - Germany - May 20, Tongzhi 5th Year (1866)"
      ],
      [
        12.5683,
        55.6761,
        "Copenhagen - Denmark - May 22, Tongzhi 5th Year (1866)"
      ],
      [
        18.0686,
        59.3293,
        "Stockholm - Sweden - May 25, Tongzhi 5th Year (1866)"
      ],
      [
        24.9384,
        60.1699,
        "Helsinki - Finland - June 3, Tongzhi 5th Year (1866)"
      ],
      [
        30.3351,
        59.9343,
        "St. Petersburg - Russia - June 5, Tongzhi 5th Year (1866)"
      ],
      [
        13.405,
        52.52,
        "Berlin - Germany - June 12, Tongzhi 5th Year (1866)"
      ],
      [
        4.3517,
        50.8503,
        "Brussels - Belgium - June 17, Tongzhi 5th Year (1866)"
      ],
      [
        2.3522,
        48.8566,
        "Paris - France - June 22, Tongzhi 5th Year (1866)"
      ],
      [
        5.3698,
        43.2965,
        "Marseille - France - July 10, Tongzhi 5th Year (1866)"
      ],
      [
        114.1694,
        22.3193,
        "Hong Kong - China - August 20, Tongzhi 5th Year (1866)"
      ],
      [
        113.2644,
        23.1291,
        "Guangzhou - China - August 21, Tongzhi 5th Year (1866)"
      ],
      [
        114.1694,
        22.3193,
        "Hong Kong - China - September 1, Tongzhi 5th Year (1866)"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - September 12, Tongzhi 5th Year (1866)"
      ],
      [
        117.1901,
        39.1072,
        "Tianjin - China - October 2, Tongzhi 5th Year (1866)"
      ],
      [
        116.4074,
        39.9042,
        "Beijing - China - October 7, Tongzhi 5th Year (1866)"
      ]
    ]
  },
  {
    "name": "Fifth Account of Wonders - Zhang Deyi",
    "color": "#4ecdc4",
    "coordinates": [
      [
        116.4074,
        39.9042,
        "Beijing - China - August 11, Guangxu 13th Year (1887)"
      ],
      [
        13.405,
        52.52,
        "Berlin - Germany - October 19, Guangxu 13th Year (1887)"
      ],
      [
        37.6173,
        55.7558,
        "Moscow - Russia - November 19, Guangxu 13th Year (1887)"
      ],
      [
        16.3738,
        48.2082,
        "Vienna - Austria - January 18, Guangxu 14th Year (1888)"
      ],
      [
        5.2913,
        52.1326,
        "Amsterdam - Netherlands - February 6, Guangxu 14th Year (1888)"
      ],
      [
        10.4515,
        51.1657,
        "Erfurt - Germany - February 5, Guangxu 15th Year (1889)"
      ],
      [
        13.405,
        52.52,
        "Berlin - Germany - February 7, Guangxu 15th Year (1889)"
      ],
      [
        2.3522,
        48.8566,
        "Paris - France - August 16, Guangxu 16th Year (1890)"
      ],
      [
        5.3698,
        43.2965,
        "Marseille - France - August 22, Guangxu 16th Year (1890)"
      ],
      [
        116.4074,
        39.9042,
        "Beijing - China - October 23, Guangxu 16th Year (1890)"
      ]
    ]
  },
  {
    "name": "Poems from Eastern Mission - Zhang Sigui",
    "color": "#4ecdc4",
    "coordinates": [
      [
        116.4074,
        39.9042,
        "Beijing - China - November, Guangxu 2nd Year (1876)"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - October 22, Guangxu 3rd Year (1877)"
      ],
      [
        129.872,
        32.7503,
        "Nagasaki - Japan - October 26, Guangxu 3rd Year (1877)"
      ],
      [
        139.6917,
        35.6895,
        "Tokyo - Japan - November 16, Guangxu 3rd Year (1877)"
      ]
    ]
  },
  {
    "name": "Brief Account and Miscellaneous Poems from Eastern Mission - He Ruzhang",
    "color": "#4ecdc4",
    "coordinates": [
      [
        116.4074,
        39.9042,
        "Beijing - China - November, Guangxu 2nd Year (1876)"
      ],
      [
        116.4074,
        39.9042,
        "Beijing - China - July 21, Guangxu 3rd Year (1877)"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - October 22, Guangxu 3rd Year (1877)"
      ],
      [
        129.872,
        32.7503,
        "Nagasaki - Japan - October 26, Guangxu 3rd Year (1877)"
      ],
      [
        139.638,
        35.4437,
        "Yokohama - Japan - November 12, Guangxu 3rd Year (1877)"
      ],
      [
        139.6917,
        35.6895,
        "Tokyo - Japan - November 19, Guangxu 3rd Year (1877)"
      ],
      [
        139.6917,
        35.6895,
        "Tokyo - Japan - November 24, Guangxu 3rd Year (1877)"
      ],
      [
        139.6917,
        35.6895,
        "Tokyo - Japan - December 20, Guangxu 3rd Year (1877)"
      ],
      [
        139.6917,
        35.6895,
        "Tokyo - Japan - December 22, Guangxu 3rd Year (1877)"
      ]
    ]
  },
  {
    "name": "Draft of Russian Mission - Wang Zhichun",
    "color": "#4ecdc4",
    "coordinates": [
      [
        121.4737,
        31.2304,
        "Shanghai - China - December 10, Guangxu 20th Year (1894)"
      ],
      [
        2.3522,
        48.8566,
        "Paris - France - January 16, Guangxu 21st Year (1895)"
      ],
      [
        13.405,
        52.52,
        "Berlin - Germany - January 18, Guangxu 21st Year (1895)"
      ],
      [
        30.3351,
        59.9343,
        "St. Petersburg - Russia - January 22, Guangxu 21st Year (1895)"
      ],
      [
        30.3351,
        59.9343,
        "St. Petersburg - Russia - January 24, Guangxu 21st Year (1895)"
      ],
      [
        30.3351,
        59.9343,
        "St. Petersburg - Russia - February 22, Guangxu 21st Year (1895)"
      ],
      [
        -0.1276,
        51.5072,
        "London - UK - March 1, Guangxu 21st Year (1895)"
      ],
      [
        2.3522,
        48.8566,
        "Paris - France - March 4, Guangxu 21st Year (1895)"
      ],
      [
        5.3698,
        43.2965,
        "Marseille - France - May 3, Guangxu 21st Year (1895)"
      ],
      [
        106.6297,
        10.8231,
        "Saigon - Vietnam - May 8 (leap month), Guangxu 21st Year (1895)"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - May 14 (leap month), Guangxu 21st Year (1895)"
      ]
    ]
  },
  {
    "name": "Brief Account of American Mission - Chen Lanbin",
    "color": "#4ecdc4",
    "coordinates": [
      [
        121.4737,
        31.2304,
        "Shanghai - China - May 1, Guangxu 4th Year (1878)"
      ],
      [
        114.1694,
        22.3193,
        "Hong Kong - China - May 5, Guangxu 4th Year (1878)"
      ],
      [
        114.1694,
        22.3193,
        "Hong Kong - China - May 22, Guangxu 4th Year (1878)"
      ],
      [
        139.638,
        35.4437,
        "Yokohama - Japan - May 27, Guangxu 4th Year (1878)"
      ],
      [
        -122.4194,
        37.7749,
        "San Francisco - USA - June 27, Guangxu 4th Year (1878)"
      ],
      [
        -72.6851,
        41.7637,
        "Hartford - USA - July 12, Guangxu 4th Year (1878)"
      ],
      [
        -74.006,
        40.7128,
        "New York - USA - August 22, Guangxu 4th Year (1878)"
      ],
      [
        -77.0369,
        38.9072,
        "Washington - USA - August 23, Guangxu 4th Year (1878)"
      ]
    ]
  },
  {
    "name": "Compilation of Russian Travel - Miao Yousun",
    "color": "#45b7d1",
    "coordinates": [
      [
        121.4737,
        31.2304,
        "Shanghai - China - September, Guangxu 13th Year (1887)"
      ],
      [
        8.9463,
        44.4056,
        "Genoa - Italy - October, Guangxu 13th Year (1887)"
      ],
      [
        37.6173,
        55.7558,
        "Moscow - Russia - October 23, Guangxu 13th Year (1887)"
      ],
      [
        37.6173,
        55.7558,
        "Moscow - Russia - June 1, Guangxu 15th Year (1889)"
      ]
    ]
  },
  {
    "name": "Sixth Account of Wonders - Zhang Deyi",
    "color": "#4ecdc4",
    "coordinates": [
      [
        116.4074,
        39.9042,
        "Beijing - China - January 28, Guangxu 23rd Year (1897)"
      ],
      [
        -0.1276,
        51.5072,
        "London - UK - April 4, Guangxu 23rd Year (1897)"
      ],
      [
        4.3517,
        50.8503,
        "Brussels - Belgium - July 6, Guangxu 24th Year (1898)"
      ],
      [
        12.4964,
        41.9028,
        "Rome - Italy - October 11, Guangxu 24th Year (1898)"
      ],
      [
        12.4964,
        41.9028,
        "Rome - Italy - February 6, Guangxu 25th Year (1899)"
      ],
      [
        4.3517,
        50.8503,
        "Brussels - Belgium - March 9, Guangxu 25th Year (1899)"
      ],
      [
        -0.1276,
        51.5072,
        "London - UK - February 12, Guangxu 26th Year (1900)"
      ],
      [
        116.4074,
        39.9042,
        "Beijing - China - October 11, Guangxu 26th Year (1900)"
      ]
    ]
  },
  {
    "name": "Diary of Mission to Nine Countries - Dai Hongci",
    "color": "#ff6b6b",
    "coordinates": [
      [
        116.4074,
        39.9042,
        "Beijing - China - November 11, Guangxu 31st Year (1905)"
      ],
      [
        129.872,
        32.7503,
        "Nagasaki - Japan - November 24, Guangxu 31st Year (1905)"
      ],
      [
        -157.8583,
        21.3069,
        "Honolulu - USA - December 11, Guangxu 31st Year (1905)"
      ],
      [
        -122.4194,
        37.7749,
        "San Francisco - USA - December 18, Guangxu 31st Year (1905)"
      ],
      [
        -77.0369,
        38.9072,
        "Washington - USA - December 29, Guangxu 31st Year (1905)"
      ],
      [
        -0.1276,
        51.5074,
        "London - UK - February 2, Guangxu 32nd Year (1906)"
      ],
      [
        2.3522,
        48.8566,
        "Paris - France - February 6, Guangxu 32nd Year (1906)"
      ],
      [
        13.405,
        52.52,
        "Berlin - Germany - February 13, Guangxu 32nd Year (1906)"
      ],
      [
        12.5683,
        55.6761,
        "Copenhagen - Denmark - March 23, Guangxu 32nd Year (1906)"
      ],
      [
        18.0686,
        59.3293,
        "Stockholm - Sweden - March 29, Guangxu 32nd Year (1906)"
      ],
      [
        10.7522,
        59.9139,
        "Oslo - Norway - April 4, Guangxu 32nd Year (1906)"
      ],
      [
        13.405,
        52.52,
        "Southern Germany - Germany - April 10, Guangxu 32nd Year (1906)"
      ],
      [
        16.3738,
        48.2082,
        "Vienna - Austria - April 16, Guangxu 32nd Year (1906)"
      ],
      [
        30.3351,
        59.9343,
        "St. Petersburg - Russia - April 26, Guangxu 32nd Year (1906)"
      ],
      [
        4.3007,
        52.0705,
        "The Hague - Netherlands - April 6 (leap month), Guangxu 32nd Year (1906)"
      ],
      [
        4.3517,
        50.8503,
        "Brussels - Belgium - April 10 (leap month), Guangxu 32nd Year (1906)"
      ],
      [
        8.2275,
        46.8182,
        "Bern - Switzerland - April 17 (leap month), Guangxu 32nd Year (1906)"
      ],
      [
        12.4964,
        41.9028,
        "Rome - Italy - April 20 (leap month), Guangxu 32nd Year (1906)"
      ],
      [
        14.2681,
        40.8518,
        "Naples - Italy - April 30 (leap month), Guangxu 32nd Year (1906)"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - June 1, Guangxu 32nd Year (1906)"
      ],
      [
        116.4074,
        39.9042,
        "Beijing - China - June 21, Guangxu 32nd Year (1906)"
      ]
    ]
  },
  {
    "name": "Diary of Mission to Britain, France, Italy and Belgium - Xue Fucheng",
    "color": "#4ecdc4",
    "coordinates": [
      [
        121.4737,
        31.2304,
        "Shanghai - China - January 11, Guangxu 16th Year (1890)"
      ],
      [
        2.3522,
        48.8566,
        "Paris - France - February 19, Guangxu 16th Year (1890)"
      ],
      [
        -0.1276,
        51.5074,
        "London - UK - March 4, Guangxu 16th Year (1890)"
      ],
      [
        4.3517,
        50.8503,
        "Brussels - Belgium - April 22, Guangxu 16th Year (1890)"
      ],
      [
        2.3522,
        48.8566,
        "Paris - France - April 29, Guangxu 16th Year (1890)"
      ],
      [
        -0.1276,
        51.5074,
        "London - UK - May 2, Guangxu 16th Year (1890)"
      ],
      [
        12.4964,
        41.9028,
        "Rome - Italy - February 3, Guangxu 17th Year (1891)"
      ],
      [
        13.405,
        52.52,
        "Berlin - Germany - February 25, Guangxu 17th Year (1891)"
      ],
      [
        13.405,
        52.52,
        "Berlin - Germany - February 26, Guangxu 17th Year (1891)"
      ],
      [
        2.3522,
        48.8566,
        "Paris - France - February 29, Guangxu 17th Year (1891)"
      ],
      [
        -0.1276,
        51.5074,
        "London - UK - March 26, Guangxu 17th Year (1891)"
      ],
      [
        -0.1276,
        51.5074,
        "London - UK - October 24, Guangxu 17th Year (1891)"
      ],
      [
        2.3522,
        48.8566,
        "Paris - France - January 18, Guangxu 18th Year (1892)"
      ],
      [
        -0.1276,
        51.5074,
        "London - UK - February 8, Guangxu 18th Year (1892)"
      ],
      [
        2.3522,
        48.8566,
        "Paris - France - March 24, Guangxu 18th Year (1892)"
      ],
      [
        -0.1372,
        50.8225,
        "Brighton - UK - July 13, Guangxu 18th Year (1892)"
      ],
      [
        -0.1276,
        51.5074,
        "London - UK - July 20, Guangxu 18th Year (1892)"
      ],
      [
        -0.1372,
        50.8225,
        "Brighton - UK - July 28, Guangxu 19th Year (1893)"
      ],
      [
        -0.1276,
        51.5074,
        "London - UK - August 13, Guangxu 19th Year (1893)"
      ],
      [
        -0.1276,
        51.5074,
        "London - UK - February 6, Guangxu 20th Year (1894)"
      ],
      [
        2.3522,
        48.8566,
        "Paris - France - April, Guangxu 20th Year (1894)"
      ],
      [
        2.3522,
        48.8566,
        "Paris - France - April, Guangxu 20th Year (1894)"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - May 28, Guangxu 20th Year (1894)"
      ]
    ]
  },
  {
    "name": "Miscellaneous Notes from Overseas - Cai Jun",
    "color": "#ff6b6b",
    "coordinates": [
      [
        114.1694,
        22.3193,
        "Hong Kong - China - Autumn, Guangxu 7th Year (1881)"
      ],
      [
        139.638,
        35.4437,
        "Yokohama - Japan - Autumn, Guangxu 7th Year (1881), 6 days by ship"
      ],
      [
        -122.4194,
        37.7749,
        "San Francisco - USA - Autumn, Guangxu 7th Year (1881), about 16 days"
      ],
      [
        -77.0369,
        38.9072,
        "Washington - USA - Autumn, Guangxu 7th Year (1881), 7 days"
      ],
      [
        -74.006,
        40.7128,
        "New York - USA - Autumn, Guangxu 7th Year (1881), 8 days"
      ],
      [
        -0.1276,
        51.5072,
        "London - UK - Autumn, Guangxu 7th Year (1881)"
      ],
      [
        -3.7038,
        40.4168,
        "Madrid - Spain - March 17, Guangxu 8th Year (1882)"
      ],
      [
        -3.7038,
        40.4168,
        "Madrid - Spain - May 2, Guangxu 8th Year (1882)"
      ],
      [
        -3.7038,
        40.4168,
        "Madrid - Spain - February 1, Guangxu 10th Year (1884)"
      ],
      [
        5.3698,
        43.2965,
        "Marseille - France - February 4, Guangxu 10th Year (1884)"
      ],
      [
        32.5498,
        29.983,
        "Suez - Egypt - February 12, Guangxu 10th Year (1884)"
      ],
      [
        79.8612,
        6.9271,
        "Ceylon - Sri Lanka - February 25, Guangxu 10th Year (1884)"
      ],
      [
        103.8198,
        1.3521,
        "Singapore - Singapore - March 2, Guangxu 10th Year (1884)"
      ],
      [
        114.1694,
        22.3193,
        "Hong Kong - China - March 11, Guangxu 10th Year (1884)"
      ]
    ]
  },
  {
    "name": "First Mission to the West - Zhigang",
    "color": "#4ecdc4",
    "coordinates": [
      [
        116.4074,
        39.9042,
        "Beijing - China - December 2, Tongzhi 6th Year (1867)"
      ],
      [
        116.4074,
        39.9042,
        "Beijing - China - December 11, Tongzhi 6th Year (1867)"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - February 3, Tongzhi 7th Year (1868)"
      ],
      [
        139.638,
        35.4437,
        "Yokohama - Japan - February 14, Tongzhi 7th Year (1868)"
      ],
      [
        -122.4194,
        37.7749,
        "San Francisco - USA - March 9, Tongzhi 7th Year (1868)"
      ],
      [
        -74.006,
        40.7128,
        "New York - USA - April 2 (leap month), Tongzhi 7th Year (1868)"
      ],
      [
        -77.0369,
        38.9072,
        "Washington - USA - April 12 (leap month), Tongzhi 7th Year (1868)"
      ],
      [
        -0.1276,
        51.5074,
        "London - UK - August 4, Tongzhi 7th Year (1868)"
      ],
      [
        2.3522,
        48.8566,
        "Paris - France - November 20, Tongzhi 7th Year (1868)"
      ],
      [
        18.0686,
        59.3293,
        "Stockholm - Sweden - August 22, Tongzhi 8th Year (1869)"
      ],
      [
        12.5683,
        55.6761,
        "Copenhagen - Denmark - September 7, Tongzhi 8th Year (1869)"
      ],
      [
        4.9041,
        52.3676,
        "Amsterdam - Netherlands - September 26, Tongzhi 8th Year (1869)"
      ],
      [
        13.405,
        52.52,
        "Berlin - Germany - October 17, Tongzhi 8th Year (1869)"
      ],
      [
        30.3351,
        59.9343,
        "St. Petersburg - Russia - January 3, Tongzhi 9th Year (1870)"
      ],
      [
        13.405,
        52.52,
        "Berlin - Germany - March 22, Tongzhi 9th Year (1870)"
      ],
      [
        4.3517,
        50.8503,
        "Brussels - Belgium - March 26, Tongzhi 9th Year (1870)"
      ],
      [
        2.3522,
        48.8566,
        "Paris - France - April 15, Tongzhi 9th Year (1870)"
      ],
      [
        12.4964,
        41.9028,
        "Rome - Italy - April 29, Tongzhi 9th Year (1870)"
      ],
      [
        2.3522,
        48.8566,
        "Paris - France - May 26, Tongzhi 9th Year (1870)"
      ],
      [
        -3.7038,
        40.4168,
        "Madrid - Spain - July 1, Tongzhi 9th Year (1870)"
      ],
      [
        2.3522,
        48.8566,
        "Paris - France - July 17, Tongzhi 9th Year (1870)"
      ],
      [
        2.3522,
        48.8566,
        "Paris - France - August 9, Tongzhi 9th Year (1870)"
      ],
      [
        116.4074,
        39.9042,
        "Beijing - China - October 26, Tongzhi 9th Year (1870)"
      ]
    ]
  },
  {
    "name": "Travel Notes of Eighteen Countries - Jin Shaocheng",
    "color": "#ff6b6b",
    "coordinates": [
      [
        121.4737,
        31.2304,
        "Shanghai - China - July 20, Xuantong 2nd Year (1910)"
      ],
      [
        139.6917,
        35.6895,
        "Tokyo - Japan - July 25, Xuantong 2nd Year (1910)"
      ],
      [
        -122.4194,
        37.7749,
        "San Francisco - USA - August 16, Xuantong 2nd Year (1910)"
      ],
      [
        -0.1276,
        51.5072,
        "London - UK - October 6, Xuantong 2nd Year (1910)"
      ],
      [
        2.3522,
        48.8566,
        "Paris - France - October 30, Xuantong 2nd Year (1910)"
      ],
      [
        4.3517,
        50.8503,
        "Brussels - Belgium - November 17, Xuantong 2nd Year (1910)"
      ],
      [
        9.5018,
        56.2639,
        "Aarhus - Denmark - November 30, Xuantong 2nd Year (1910)"
      ],
      [
        8.4689,
        60.472,
        "Kristiansund - Norway - December 11, Xuantong 2nd Year (1910)"
      ],
      [
        13.405,
        52.52,
        "Berlin - Germany - December 19, Xuantong 2nd Year (1910)"
      ],
      [
        16.3738,
        48.2082,
        "Vienna - Austria - December 29, Xuantong 2nd Year (1910)"
      ],
      [
        28.9784,
        41.0082,
        "Istanbul - Turkey - January 14, Xuantong 3rd Year (1911)"
      ],
      [
        12.4964,
        41.9028,
        "Rome - Italy - January 26, Xuantong 3rd Year (1911)"
      ],
      [
        114.1694,
        22.3193,
        "Hong Kong - China - April 19, Xuantong 3rd Year (1911)"
      ]
    ]
  },
  {
    "name": "Diary of Eastern Travel in Maoyear - Zhang Jiankui",
    "color": "#45b7d1",
    "coordinates": [
      [
        121.4737,
        31.2304,
        "Shanghai - China - April 27, Guangxu 29th Year (1903)"
      ],
      [
        129.8738,
        32.7503,
        "Nagasaki - Japan - April 28, Guangxu 29th Year (1903)"
      ],
      [
        135.5023,
        34.6937,
        "Osaka - Japan - May 2, Guangxu 29th Year (1903)"
      ],
      [
        139.6917,
        35.6895,
        "Tokyo - Japan - May 5, Guangxu 29th Year (1903)"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - June 6, Guangxu 29th Year (1903)"
      ]
    ]
  },
  {
    "name": "Diary of Eastern Travel from Yuzhai - Sheng Xuanhuai",
    "color": "#ff6b6b",
    "coordinates": [
      [
        129.8738,
        32.7503,
        "Nagasaki - Japan - August 9, Guangxu 34th Year (1908)"
      ],
      [
        139.6917,
        35.6895,
        "Tokyo - Japan - August 15, Guangxu 34th Year (1908)"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - November 2, Guangxu 34th Year (1908)"
      ]
    ]
  },
  {
    "name": "Two Months in Japan - Luo Zhenyu",
    "color": "#45b7d1",
    "coordinates": [
      [
        139.6917,
        35.6895,
        "Tokyo - Japan - November 4, Guangxu 27th Year (1901)"
      ],
      [
        129.8738,
        32.7503,
        "Nagasaki - Japan - November 6, Guangxu 27th Year (1901)"
      ],
      [
        139.6917,
        35.6895,
        "Tokyo - Japan - November 9, Guangxu 27th Year (1901)"
      ],
      [
        139.6917,
        35.6895,
        "Tokyo - Japan - January 3, Guangxu 28th Year (1902)"
      ],
      [
        135.5023,
        34.6937,
        "Osaka - Japan - January 8, Guangxu 28th Year (1902)"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - January 12, Guangxu 28th Year (1902)"
      ]
    ]
  },
  {
    "name": "Second Travel to Japan - Luo Zhenyu",
    "color": "#45b7d1",
    "coordinates": [
      [
        117.201,
        39.0842,
        "Tianjin - China - May 10, Xuantong 1st Year (1909)"
      ],
      [
        135.1955,
        34.6901,
        "Kobe - Japan - May 16, Xuantong 1st Year (1909)"
      ],
      [
        139.6917,
        35.6895,
        "Tokyo - Japan - May 19, Xuantong 1st Year (1909)"
      ],
      [
        139.6917,
        35.6895,
        "Tokyo - Japan - June 21, Xuantong 1st Year (1909)"
      ],
      [
        121.4896,
        31.3769,
        "Wusong - China - June 26, Xuantong 1st Year (1909)"
      ]
    ]
  },
  {
    "name": "Travel Notes of Japan - Wang Tao",
    "color": "#45b7d1",
    "coordinates": [
      [
        121.4737,
        31.2304,
        "Shanghai - China - March 7 (leap month), Guangxu 5th Year (1879)"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - March 9 (leap month), Guangxu 5th Year (1879)"
      ],
      [
        129.872,
        32.7503,
        "Nagasaki - Japan - March 12 (leap month), Guangxu 5th Year (1879)"
      ],
      [
        135.1955,
        34.6937,
        "Kobe - Japan - March 14 (leap month), Guangxu 5th Year (1879)"
      ],
      [
        135.5023,
        34.6937,
        "Osaka - Japan - March 17 (leap month), Guangxu 5th Year (1879)"
      ],
      [
        135.768,
        35.0116,
        "Kyoto - Japan - March 20 (leap month), Guangxu 5th Year (1879)"
      ],
      [
        139.6917,
        35.6895,
        "Tokyo - Japan - March 25 (leap month), Guangxu 5th Year (1879)"
      ],
      [
        139.6917,
        35.6895,
        "Tokyo - Japan - March 28 (leap month), Guangxu 5th Year (1879)"
      ],
      [
        139.6917,
        35.6895,
        "Tokyo - Japan - April 12, Guangxu 5th Year (1879)"
      ],
      [
        139.6917,
        35.6895,
        "Tokyo - Japan - April 17, Guangxu 5th Year (1879)"
      ],
      [
        139.638,
        35.4437,
        "Yokohama - Japan - May 13, Guangxu 5th Year (1879)"
      ],
      [
        139.6018,
        36.7194,
        "Nikko - Japan - June 14, Guangxu 5th Year (1879)"
      ],
      [
        139.6917,
        35.6895,
        "Tokyo - Japan - June 23, Guangxu 5th Year (1879)"
      ],
      [
        139.6917,
        35.6895,
        "Tokyo - Japan - July 4, Guangxu 5th Year (1879)"
      ],
      [
        139.638,
        35.4437,
        "Yokohama - Japan - July 6, Guangxu 5th Year (1879)"
      ],
      [
        135.1955,
        34.6937,
        "Kobe - Japan - July 8, Guangxu 5th Year (1879)"
      ],
      [
        129.872,
        32.7503,
        "Nagasaki - Japan - July 10, Guangxu 5th Year (1879)"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - July 14, Guangxu 5th Year (1879)"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - July 15, Guangxu 5th Year (1879)"
      ]
    ]
  },
  {
    "name": "New World Travel Notes and Others - Liang Qichao",
    "color": "#45b7d1",
    "coordinates": [
      [
        139.638,
        35.4437,
        "Yokohama - Japan - November 18, Guangxu 25th Year (1899)"
      ],
      [
        -157.8583,
        21.3069,
        "Honolulu - USA - November 29, Guangxu 25th Year (1899)"
      ],
      [
        100.3288,
        5.4141,
        "Penang - Malaysia - August 14 (leap month), Guangxu 26th Year (1900)"
      ],
      [
        149.1286,
        -35.282,
        "Canberra - Australia - September 3, Guangxu 26th Year (1900)"
      ],
      [
        139.638,
        35.4437,
        "Yokohama - Japan - January, Guangxu 29th Year (1903)"
      ],
      [
        -75.6972,
        45.4215,
        "Ottawa - Canada - February 6, Guangxu 29th Year (1903)"
      ],
      [
        -74.006,
        40.7128,
        "New York - USA - April 16, Guangxu 29th Year (1903)"
      ],
      [
        -77.0369,
        38.9072,
        "Washington - USA - May 16, Guangxu 29th Year (1903)"
      ]
    ]
  },
  {
    "name": "Diary of Japan - Luo Sen",
    "color": "#a29bfe",
    "coordinates": [
      [
        114.1694,
        22.3193,
        "Hong Kong - China - October, Xianfeng 3rd Year (1853)"
      ],
      [
        127.6809,
        26.2124,
        "Naha - Japan - December, Xianfeng 3rd Year (1853)"
      ],
      [
        127.6809,
        26.2124,
        "Naha - Japan - January 1-8, Xianfeng 4th Year (1854)"
      ],
      [
        139.638,
        35.4437,
        "Yokohama - Japan - January 12, Xianfeng 4th Year (1854)"
      ],
      [
        139.638,
        35.4437,
        "Yokohama - Japan - March 25, Xianfeng 4th Year (1854)"
      ],
      [
        138.9458,
        34.6625,
        "Shimoda - Japan - April, Xianfeng 4th Year (1854)"
      ],
      [
        127.6809,
        26.2124,
        "Naha - Japan - June, Xianfeng 4th Year (1854)"
      ],
      [
        119.3062,
        26.0745,
        "Fuzhou - China - July, Xianfeng 4th Year (1854)"
      ],
      [
        114.1694,
        22.3193,
        "Hong Kong - China - October, Xianfeng 4th Year (1854)"
      ]
    ]
  },
  {
    "name": "Miscellaneous Poems on Japan (Extended Commentary) - Huang Zunxian",
    "color": "#45b7d1",
    "coordinates": [
      [
        116.4074,
        39.9042,
        "Beijing - China - October, Guangxu 3rd Year (1877)"
      ],
      [
        139.6917,
        35.6895,
        "Tokyo - Japan - Winter, Guangxu 5th Year (1879)"
      ],
      [
        -122.4194,
        37.7749,
        "San Francisco - USA - Spring, Guangxu 8th Year (1882)"
      ],
      [
        -0.1276,
        51.5074,
        "London - UK - Guangxu 16th Year (1890)"
      ],
      [
        112.9831,
        28.2282,
        "Changsha - China - Guangxu 24th Year (1898)"
      ]
    ]
  },
  {
    "name": "Travel Notes of Japan - Li Xiaopu",
    "color": "#ff6b6b",
    "coordinates": [
      [
        121.4737,
        31.2304,
        "Shanghai - China - March, Guangxu 6th Year (1880)"
      ],
      [
        129.872,
        32.7503,
        "Nagasaki - Japan - March 29, Guangxu 6th Year (1880)"
      ],
      [
        135.1955,
        34.6937,
        "Kobe - Japan - April 1, Guangxu 6th Year (1880)"
      ],
      [
        135.768,
        35.0116,
        "Kyoto - Japan - April 4, Guangxu 6th Year (1880)"
      ],
      [
        139.638,
        35.4437,
        "Yokohama - Japan - April 12, Guangxu 6th Year (1880)"
      ],
      [
        139.6917,
        35.6895,
        "Tokyo - Japan - April 15, Guangxu 6th Year (1880)"
      ],
      [
        139.6917,
        35.6895,
        "Tokyo - Japan - May 2, Guangxu 6th Year (1880)"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - May 11, Guangxu 6th Year (1880)"
      ]
    ]
  },
  {
    "name": "Compilation of Japanese Travel - Miao Quansun",
    "color": "#45b7d1",
    "coordinates": [
      [
        121.4737,
        31.2304,
        "Shanghai - China - January 17, Guangxu 29th Year (1903)"
      ],
      [
        139.6917,
        35.6895,
        "Tokyo - Japan - January 22, Guangxu 29th Year (1903)"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - March 11, Guangxu 29th Year (1903)"
      ]
    ]
  },
  {
    "name": "Notes of Japanese Travel - Wang Jingxi",
    "color": "#45b7d1",
    "coordinates": [
      [
        139.6917,
        35.6895,
        "Tokyo - Japan - September 1, Guangxu 29th Year (1903)"
      ],
      [
        135.5023,
        34.6937,
        "Osaka - Japan - September 7, Guangxu 29th Year (1903)"
      ],
      [
        139.6917,
        35.6895,
        "Tokyo - Japan - September 9, Guangxu 29th Year (1903)"
      ],
      [
        139.6917,
        35.6895,
        "Tokyo - Japan - October 13, Guangxu 29th Year (1903)"
      ],
      [
        129.8738,
        32.7503,
        "Nagasaki - Japan - October 22, Guangxu 29th Year (1903)"
      ]
    ]
  },
  {
    "name": "Records of Li Hongzhang's Visits to Europe and America - Cai Erkang et al.",
    "color": "#10ac84",
    "coordinates": [
      [
        116.4074,
        39.9042,
        "Beijing - China - January 18, Guangxu 22nd Year (1896)"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - February 15, Guangxu 22nd Year (1896)"
      ],
      [
        30.7326,
        46.4825,
        "Odessa - Russia - March 15, Guangxu 22nd Year (1896)"
      ],
      [
        30.3351,
        59.9343,
        "St. Petersburg - Russia - March 18, Guangxu 22nd Year (1896)"
      ],
      [
        13.405,
        52.52,
        "Berlin - Germany - May 3, Guangxu 22nd Year (1896)"
      ],
      [
        4.9041,
        52.3676,
        "Amsterdam - Netherlands - May 24, Guangxu 22nd Year (1896)"
      ],
      [
        4.3517,
        50.8503,
        "Brussels - Belgium - May 28, Guangxu 22nd Year (1896)"
      ],
      [
        2.3522,
        48.8566,
        "Paris - France - June 3, Guangxu 22nd Year (1896)"
      ],
      [
        -0.1276,
        51.5074,
        "London - UK - June 23, Guangxu 22nd Year (1896)"
      ],
      [
        -1.4044,
        50.9097,
        "Southampton - UK - July 14, Guangxu 22nd Year (1896)"
      ],
      [
        -74.006,
        40.7128,
        "New York - USA - July 20, Guangxu 22nd Year (1896)"
      ],
      [
        -77.0369,
        38.9072,
        "Washington - USA - July 28, Guangxu 22nd Year (1896)"
      ],
      [
        117.1901,
        39.1072,
        "Tianjin - China - August 26, Guangxu 22nd Year (1896)"
      ],
      [
        116.4074,
        39.9042,
        "Beijing - China - September 11, Guangxu 22nd Year (1896)"
      ]
    ]
  },
  {
    "name": "Two Travel Notes of Eleven European Countries - Kang Youwei",
    "color": "#45b7d1",
    "coordinates": [
      [
        100.3288,
        5.4141,
        "Penang - Malaysia - March 12, Guangxu 30th Year (1904)"
      ],
      [
        79.8612,
        6.9271,
        "Ceylon - Sri Lanka - April 18, Guangxu 30th Year (1904)"
      ],
      [
        12.4964,
        41.9028,
        "Rome - Italy - May 2, Guangxu 30th Year (1904)"
      ],
      [
        14.2681,
        40.8518,
        "Naples - Italy - May 3, Guangxu 30th Year (1904)"
      ],
      [
        14.4849,
        40.7462,
        "Pompeii - Italy - May 4, Guangxu 30th Year (1904)"
      ],
      [
        12.4964,
        41.9028,
        "Rome - Italy - May 6, Guangxu 30th Year (1904)"
      ],
      [
        8.2275,
        46.8182,
        "Bern - Switzerland - May 13, Guangxu 30th Year (1904)"
      ],
      [
        2.3522,
        48.8566,
        "Paris - France - July 23, Guangxu 31st Year (1905)"
      ]
    ]
  },
  {
    "name": "Miscellaneous Records of European Travel - Xu Jianyin",
    "color": "#96ceb4",
    "coordinates": [
      [
        121.4737,
        31.2304,
        "Shanghai - China - October 11, Guangxu 5th Year (1879)"
      ],
      [
        13.405,
        52.52,
        "Berlin - Germany - October, Guangxu 5th Year (1879)"
      ],
      [
        2.3522,
        48.8566,
        "Paris - France - January, Guangxu 6th Year (1880)"
      ],
      [
        13.405,
        52.52,
        "Berlin - Germany - February, Guangxu 6th Year (1880)"
      ],
      [
        13.405,
        52.52,
        "Various Places in Germany - Germany - May, Guangxu 6th Year (1880)"
      ],
      [
        -0.1276,
        51.5074,
        "London - UK - August, Guangxu 6th Year (1880)"
      ],
      [
        13.405,
        52.52,
        "Berlin - Germany - September, Guangxu 6th Year (1880)"
      ],
      [
        13.405,
        52.52,
        "Berlin - Germany - November, Guangxu 6th Year (1880)"
      ],
      [
        13.405,
        52.52,
        "Berlin - Germany - July, Guangxu 7th Year (1881)"
      ],
      [
        13.405,
        52.52,
        "Berlin - Germany - August 1, Guangxu 7th Year (1881)"
      ]
    ]
  },
  {
    "name": "Random Notes of European Travel - Qian Depei",
    "color": "#96ceb4",
    "coordinates": [
      [
        121.4737,
        31.2304,
        "Shanghai - China - October 18, Guangxu 3rd Year (1877)"
      ],
      [
        103.8198,
        1.3521,
        "Singapore - Singapore - November 1, Guangxu 3rd Year (1877)"
      ],
      [
        14.2681,
        40.8518,
        "Naples - Italy - November 27, Guangxu 3rd Year (1877)"
      ],
      [
        2.3522,
        48.8566,
        "Paris - France - December 2, Guangxu 3rd Year (1877)"
      ],
      [
        13.405,
        52.52,
        "Berlin - Germany - December 4, Guangxu 3rd Year (1877)"
      ],
      [
        10.4515,
        51.1657,
        "Erfurt - Germany - August 10, Guangxu 10th Year (1884)"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - October 9, Guangxu 10th Year (1884)"
      ]
    ]
  },
  {
    "name": "Travel Notes of Europe and America - Zhang Deyi",
    "color": "#45b7d1",
    "coordinates": [
      [
        116.4074,
        39.9042,
        "Beijing - China - December 11, Tongzhi 6th Year (1867)"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - February 3, Tongzhi 7th Year (1868)"
      ],
      [
        139.638,
        35.4437,
        "Yokohama - Japan - February 11, Tongzhi 7th Year (1868)"
      ],
      [
        -122.4194,
        37.7749,
        "San Francisco - USA - March 8, Tongzhi 7th Year (1868)"
      ],
      [
        -74.006,
        40.7128,
        "New York - USA - May 1 (Intercalary Month), Tongzhi 7th Year (1868)"
      ],
      [
        -77.0369,
        38.9072,
        "Washington - USA - May 11 (Intercalary Month), Tongzhi 7th Year (1868)"
      ],
      [
        -71.0589,
        42.3601,
        "Boston - USA - July 3, Tongzhi 7th Year (1868)"
      ],
      [
        -0.1276,
        51.5074,
        "London - UK - August 4, Tongzhi 7th Year (1868)"
      ],
      [
        2.3522,
        48.8566,
        "Paris - France - November 20, Tongzhi 7th Year (1868)"
      ],
      [
        2.3522,
        48.8566,
        "Paris - France - June 17, Tongzhi 8th Year (1869)"
      ],
      [
        5.3698,
        43.2965,
        "Marseille - France - July 26, Tongzhi 8th Year (1869)"
      ],
      [
        116.4074,
        39.9042,
        "Beijing - China - September 26, Tongzhi 8th Year (1869)"
      ]
    ]
  },
  {
    "name": "Poems of Paris - Wang Yixuan",
    "color": "#45b7d1",
    "coordinates": [
      [
        121.4737,
        31.2304,
        "Shanghai - China - New Year's Day, Guangxu Bingxu Year (1886)"
      ],
      [
        2.3522,
        48.8566,
        "Paris - France - Mid-Spring, Guangxu Bingxu Year (1886)"
      ]
    ]
  },
  {
    "name": "Daily Talks of a Sea Traveler - Wang Zhi",
    "color": "#feca57",
    "coordinates": [
      [
        98.4973,
        25.0176,
        "Tengyue - China - October 1st (Wuwu Day), Tongzhi 10th Year (November 13, 1871)"
      ],
      [
        96.0839,
        21.9588,
        "Mandalay - Myanmar - October (Jiashen Day), Tongzhi 10th Year (December 9, 1871)"
      ],
      [
        96.1735,
        16.7967,
        "Yangon - Myanmar - December (Gengshen Day), Tongzhi 10th Year (January 14, 1872)"
      ],
      [
        -0.1276,
        51.5072,
        "London - UK - December (Guwei Day), Tongzhi 10th Year (February 6, 1872)"
      ],
      [
        18.0686,
        59.3293,
        "Stockholm - Sweden - January (Wuxu Day), Tongzhi 11th Year (February 21, 1872)"
      ],
      [
        2.3522,
        48.8566,
        "Paris - France - January (Xinhai Day), Tongzhi 11th Year (March 5, 1872)"
      ],
      [
        116.4074,
        39.9042,
        "Beijing - China - April (Yimao Day), Tongzhi 11th Year (May 8, 1872)"
      ]
    ]
  },
  {
    "name": "Maritime Records - Xie Qinggao",
    "color": "#45b7d1",
    "coordinates": [
      [
        113.5491,
        22.1987,
        "Macau - China - Jiaqing 1st Year (1796)"
      ]
    ]
  },
  {
    "name": "Supplementary Records of Travel in Japan - Fu Yunlong",
    "color": "#ff6b6b",
    "coordinates": [
      [
        116.4074,
        39.9042,
        "Beijing - China - August 17, Guangxu 13th Year (1887)"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - September 27, Guangxu 13th Year (1887)"
      ],
      [
        129.872,
        32.7503,
        "Nagasaki - Japan - September 29, Guangxu 13th Year (1887)"
      ],
      [
        135.1955,
        34.6937,
        "Kobe - Japan - October 9, Guangxu 13th Year (1887)"
      ],
      [
        139.6917,
        35.6895,
        "Tokyo - Japan - October 11, Guangxu 13th Year (1887)"
      ],
      [
        139.6917,
        35.6895,
        "Tokyo - Japan - November 5, Guangxu 13th Year (1887)"
      ],
      [
        139.6917,
        35.6895,
        "Tokyo - Japan - April 18, Guangxu 14th Year (1888)"
      ],
      [
        -122.4194,
        37.7749,
        "San Francisco - USA - April 28, Guangxu 15th Year (1889)"
      ],
      [
        139.6917,
        35.6895,
        "Tokyo - Japan - September 17, Guangxu 15th Year (1889)"
      ],
      [
        139.6917,
        35.6895,
        "Tokyo - Japan - September 21, Guangxu 15th Year (1889)"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - September 27, Guangxu 15th Year (1889)"
      ],
      [
        116.4074,
        39.9042,
        "Beijing - China - October 17, Guangxu 15th Year (1889)"
      ]
    ]
  },
  {
    "name": "Supplementary Records of Travel in USA and Canada - Fu Yunlong",
    "color": "#ff6b6b",
    "coordinates": [
      [
        139.638,
        35.4437,
        "Yokohama - Japan - April 19, Guangxu 14th Year (1888)"
      ],
      [
        -122.4194,
        37.7749,
        "San Francisco - USA - May 5, Guangxu 14th Year (1888)"
      ],
      [
        -73.5673,
        45.5017,
        "Montreal - Canada - August 16, Guangxu 14th Year (1888)"
      ],
      [
        -82.3666,
        23.1136,
        "Havana - Cuba - November 3, Guangxu 14th Year (1888)"
      ],
      [
        -75.0152,
        -9.1899,
        "Lima - Peru - December 7, Guangxu 14th Year (1888)"
      ],
      [
        -47.9292,
        -15.7801,
        "Brasilia - Brazil - February 6, Guangxu 15th Year (1889)"
      ],
      [
        -74.006,
        40.7128,
        "New York - USA - March 19, Guangxu 15th Year (1889)"
      ],
      [
        -122.4194,
        37.7749,
        "San Francisco - USA - April 12, Guangxu 15th Year (1889)"
      ],
      [
        139.638,
        35.4437,
        "Yokohama - Japan - April 28, Guangxu 15th Year (1889)"
      ]
    ]
  },
  {
    "name": "Travel Observations - Hong Xun",
    "color": "#ff6b6b",
    "coordinates": [
      [
        121.4737,
        31.2304,
        "Shanghai - China - Mid-Winter, Guangxu 13th Year (1887)"
      ]
    ]
  },
  {
    "name": "Diary of American Travel - Qi Zhaoxi",
    "color": "#00d2d3",
    "coordinates": [
      [
        121.4737,
        31.2304,
        "Shanghai - China - August 9, Tongzhi 13th Year (1874)"
      ],
      [
        -122.4194,
        37.7749,
        "San Francisco - USA - September 13, Tongzhi 13th Year (1874)"
      ],
      [
        -93.292,
        37.2089,
        "Springfield - USA - September 26, Tongzhi 13th Year (1874)"
      ],
      [
        -72.6851,
        41.7637,
        "Hartford - USA - September 30, Tongzhi 13th Year (1874)"
      ],
      [
        -72.6851,
        41.7637,
        "Hartford - USA - October 8, Tongzhi 13th Year (1874)"
      ],
      [
        -122.4194,
        37.7749,
        "San Francisco - USA - October 24, Tongzhi 13th Year (1874)"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - December 1, Tongzhi 13th Year (1874)"
      ]
    ]
  },
  {
    "name": "Remaining Travel Notes - Feng Ling",
    "color": "#feca57",
    "coordinates": [
      [
        121.4737,
        31.2304,
        "Shanghai - China - February 28, Guangxu 19th Year (should be 20th Year) (1893)"
      ],
      [
        5.3698,
        43.2965,
        "Marseille - France - April 13, Guangxu 19th Year (1893)"
      ]
    ]
  },
  {
    "name": "Random Travel Records - Wang Tao",
    "color": "#45b7d1",
    "coordinates": [
      [
        121.4737,
        31.2304,
        "Shanghai - China - January, Daoguang Wushen Year (1848)"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - September, Daoguang Jiyou Year (1849)"
      ],
      [
        120.5853,
        31.299,
        "Suzhou - China - August, Xianfeng Jiayin Year (1854)"
      ],
      [
        114.1694,
        22.3193,
        "Hong Kong - China - Intercalary August, Tongzhi Renxu Year (1862)"
      ],
      [
        114.1694,
        22.3193,
        "Hong Kong - China - November, Tongzhi Dingmao Year (1867)"
      ],
      [
        -0.1276,
        51.5074,
        "London - UK - January, Tongzhi Wuchen Year (1868)"
      ],
      [
        -3.6478,
        56.462,
        "Dundee - UK - May, Tongzhi Wuchen Year (1868)"
      ],
      [
        114.1694,
        22.3193,
        "Hong Kong - China - December, Tongzhi Gengwu Year (1870)"
      ]
    ]
  },
  {
    "name": "New Records of Traveling Around the World - Li Gui",
    "color": "#ff9f43",
    "coordinates": [
      [
        121.4737,
        31.2304,
        "Shanghai - China - April 21, Guangxu 2nd Year (1876)"
      ],
      [
        129.872,
        32.7503,
        "Nagasaki - Japan - April 22, Guangxu 2nd Year (1876)"
      ],
      [
        139.638,
        35.4437,
        "Yokohama - Japan - May 2, Guangxu 2nd Year (1876)"
      ],
      [
        -122.4194,
        37.7749,
        "San Francisco - USA - May 20, Guangxu 2nd Year (1876)"
      ],
      [
        -75.1652,
        39.9526,
        "Philadelphia - USA - June 2 (Intercalary Month), Guangxu 2nd Year (1876)"
      ],
      [
        -77.0369,
        38.9072,
        "Washington - USA - July, Guangxu 2nd Year (1876)"
      ],
      [
        -74.006,
        40.7128,
        "New York - USA - August, Guangxu 2nd Year (1876)"
      ],
      [
        -74.006,
        40.7128,
        "New York - USA - September 9, Guangxu 2nd Year (1876)"
      ],
      [
        -0.1276,
        51.5074,
        "London - UK - September 24, Guangxu 2nd Year (1876)"
      ],
      [
        2.3522,
        48.8566,
        "Paris - France - October 11, Guangxu 2nd Year (1876)"
      ],
      [
        5.3698,
        43.2965,
        "Marseille - France - October 18, Guangxu 2nd Year (1876)"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - December 4, Guangxu 2nd Year (1876)"
      ]
    ]
  },
  {
    "name": "Travel Diary - Chen Qi",
    "color": "#ff6b6b",
    "coordinates": [
      [
        121.4737,
        31.2304,
        "Shanghai - China - April 29, Guangxu 30th Year (1904)"
      ],
      [
        139.638,
        35.4437,
        "Yokohama - Japan - May 6, Guangxu 30th Year (1904)"
      ],
      [
        -122.4194,
        37.7749,
        "San Francisco - USA - May 15, Guangxu 30th Year (1904)"
      ],
      [
        -90.1994,
        38.627,
        "St. Louis - USA - May 24, Guangxu 30th Year (1904)"
      ],
      [
        -74.006,
        40.7128,
        "New York - USA - November 13, Guangxu 30th Year (1904)"
      ],
      [
        -0.1276,
        51.5072,
        "London - UK - November 23, Guangxu 30th Year (1904)"
      ],
      [
        2.3522,
        48.8566,
        "Paris - France - November 25, Guangxu 30th Year (1904)"
      ],
      [
        4.3571,
        50.8503,
        "Brussels - Belgium - December 1, Guangxu 30th Year (1904)"
      ],
      [
        13.405,
        52.52,
        "Berlin - Germany - December 5, Guangxu 30th Year (1904)"
      ],
      [
        4.3571,
        50.8503,
        "Brussels - Belgium - January 1, Guangxu 31st Year (1905)"
      ],
      [
        2.3522,
        48.8566,
        "Paris - France - January 21, Guangxu 31st Year (1905)"
      ],
      [
        79.8612,
        6.9271,
        "Colombo - Sri Lanka - February 13, Guangxu 31st Year (1905)"
      ],
      [
        103.8198,
        1.3521,
        "Singapore - Singapore - February 18, Guangxu 31st Year (1905)"
      ],
      [
        121.4896,
        31.3769,
        "Shanghai - China - February 27, Guangxu 31st Year (1905)"
      ]
    ]
  },
  {
    "name": "Travel Notes of Guimao Year and Return Records - Qian Danshili",
    "color": "#ee5a24",
    "coordinates": [
      [
        135.5023,
        34.6937,
        "Osaka - Japan - February 17, Guangxu 29th Year (1903)"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - February 30, Guangxu 29th Year (1903)"
      ],
      [
        120.683,
        30.532,
        "Xiashi Town - China - March 5, Guangxu 29th Year (1903)"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - March 14, Guangxu 29th Year (1903)"
      ],
      [
        126.978,
        37.5665,
        "Seoul - Korea - March 23, Guangxu 29th Year (1903)"
      ],
      [
        131.8856,
        43.1155,
        "Vladivostok - Russia - April 6, Guangxu 29th Year (1903)"
      ],
      [
        126.6424,
        45.7564,
        "Harbin - China - April 12, Guangxu 29th Year (1903)"
      ],
      [
        107.5841,
        53.5586,
        "Lake Baikal - Russia - April 19, Guangxu 29th Year (1903)"
      ],
      [
        37.6173,
        55.7558,
        "Moscow - Russia - April 27, Guangxu 29th Year (1903)"
      ]
    ]
  },
  {
    "name": "Diary of Eastern Travel from Yue'an - Ling Wenyuan",
    "color": "#ff6b6b",
    "coordinates": [
      [
        121.4737,
        31.2304,
        "Shanghai - China - March 21, Guangxu 29th Year (1903)"
      ],
      [
        135.1955,
        34.6901,
        "Kobe - Japan - March 25, Guangxu 29th Year (1903)"
      ],
      [
        135.5023,
        34.6937,
        "Osaka - Japan - From March 26, Guangxu 29th Year (1903)"
      ],
      [
        138.383,
        34.9771,
        "Shizuoka - Japan - From April 25, Guangxu 29th Year (1903)"
      ],
      [
        135.5023,
        34.6937,
        "Osaka - Japan - May 1, Guangxu 29th Year (1903)"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - June 27, Guangxu 29th Year (1903)"
      ]
    ]
  },
  {
    "name": "Diary of Agricultural Investigation - Huang Jing",
    "color": "#ff6b6b",
    "coordinates": [
      [
        117.201,
        39.0842,
        "Tianjin - China - June 23, Guangxu 28th Year (1902)"
      ],
      [
        130.9419,
        33.95,
        "Shimonoseki - Japan - June 28, Guangxu 28th Year (1902)"
      ],
      [
        139.6917,
        35.6895,
        "Tokyo - Japan - July 4, Guangxu 28th Year (1902)"
      ],
      [
        139.6917,
        35.6895,
        "Tokyo - Japan - August 29, Guangxu 28th Year (1902)"
      ],
      [
        117.201,
        39.0842,
        "Tianjin - China - September 6, Guangxu 28th Year (1902)"
      ]
    ]
  },
  {
    "name": "Diary of Commercial Investigation - Liu Xuexun",
    "color": "#ff6b6b",
    "coordinates": [
      [
        121.4737,
        31.2304,
        "Shanghai - China - June 1, Guangxu 25th Year (1899)"
      ],
      [
        129.8738,
        32.7503,
        "Nagasaki - Japan - June 3, Guangxu 25th Year (1899)"
      ],
      [
        139.6917,
        35.6895,
        "Tokyo - Japan - June 7, Guangxu 25th Year (1899)"
      ],
      [
        104.1954,
        35.8617,
        "Lanzhou - China - July 26, Guangxu 25th Year (1899)"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - August 2, Guangxu 25th Year (1899)"
      ]
    ]
  },
  {
    "name": "Diary of Political Investigation - Zai Ze",
    "color": "#ff6b6b",
    "coordinates": [
      [
        116.4074,
        39.9042,
        "Beijing - China - November 15, Guangxu 31st Year (1905)"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - December 20, Guangxu 31st Year (1905)"
      ],
      [
        139.6917,
        35.6895,
        "Tokyo - Japan - December 28, Guangxu 31st Year (1905)"
      ],
      [
        -122.3321,
        47.6062,
        "Seattle - USA - February 6, Guangxu 32nd Year (1906)"
      ],
      [
        -77.0369,
        38.9072,
        "Washington - USA - February 17, Guangxu 32nd Year (1906)"
      ],
      [
        -0.1276,
        51.5074,
        "London - UK - February 28, Guangxu 32nd Year (1906)"
      ],
      [
        2.3522,
        48.8566,
        "Paris - France - March 25, Guangxu 32nd Year (1906)"
      ],
      [
        -0.1276,
        51.5074,
        "London - UK - April 16, Guangxu 32nd Year (1906)"
      ],
      [
        4.3517,
        50.8503,
        "Brussels - Belgium - Intercalary April 3, Guangxu 32nd Year (1906)"
      ],
      [
        2.3522,
        48.8566,
        "Paris - France - Intercalary April 16, Guangxu 32nd Year (1906)"
      ],
      [
        5.3698,
        43.2965,
        "Marseille - France - Intercalary April 19, Guangxu 32nd Year (1906)"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - May 21, Guangxu 32nd Year (1906)"
      ],
      [
        116.4074,
        39.9042,
        "Beijing - China - June 3, Guangxu 32nd Year (1906)"
      ]
    ]
  },
  {
    "name": "Marvelous Accounts of Sea Voyage - Zhang Deyi",
    "color": "#fd79a8",
    "coordinates": [
      [
        116.4074,
        39.9042,
        "Beijing - China - January 20, Tongzhi 5th Year (1866)"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - February 7, Tongzhi 5th Year (1866)"
      ],
      [
        5.3698,
        43.2965,
        "Marseille - France - March 18, Tongzhi 5th Year (1866)"
      ],
      [
        2.3522,
        48.8566,
        "Paris - France - March 23, Tongzhi 5th Year (1866)"
      ],
      [
        -0.1276,
        51.5074,
        "London - UK - April 2, Tongzhi 5th Year (1866)"
      ],
      [
        4.9041,
        52.3676,
        "Amsterdam - Netherlands - May 13, Tongzhi 5th Year (1866)"
      ],
      [
        9.9937,
        53.5511,
        "Hamburg - Germany - May 20, Tongzhi 5th Year (1866)"
      ],
      [
        12.5683,
        55.6761,
        "Copenhagen - Denmark - May 22, Tongzhi 5th Year (1866)"
      ],
      [
        18.0686,
        59.3293,
        "Stockholm - Sweden - May 24, Tongzhi 5th Year (1866)"
      ],
      [
        24.9384,
        60.1699,
        "Helsinki - Finland - June 2, Tongzhi 5th Year (1866)"
      ],
      [
        30.3351,
        59.9343,
        "St. Petersburg - Russia - June 5, Tongzhi 5th Year (1866)"
      ],
      [
        13.405,
        52.52,
        "Berlin - Germany - June 12, Tongzhi 5th Year (1866)"
      ],
      [
        9.7332,
        52.3759,
        "Hannover - Germany - June 16, Tongzhi 5th Year (1866)"
      ],
      [
        4.3517,
        50.8503,
        "Brussels - Belgium - June 17, Tongzhi 5th Year (1866)"
      ],
      [
        2.3522,
        48.8566,
        "Paris - France - June 22, Tongzhi 5th Year (1866)"
      ],
      [
        5.3698,
        43.2965,
        "Marseille - France - July 10, Tongzhi 5th Year (1866)"
      ],
      [
        114.1694,
        22.3193,
        "Hong Kong - China - August 21, Tongzhi 5th Year (1866)"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - August 26, Tongzhi 5th Year (1866)"
      ],
      [
        116.4074,
        39.9042,
        "Beijing - China - September 18, Tongzhi 5th Year (1866)"
      ]
    ]
  },
  {
    "name": "Diary of British Mission - Zai Zhen",
    "color": "#ff6b6b",
    "coordinates": [
      [
        121.4737,
        31.2304,
        "Shanghai - China - March 15, Guangxu 28th Year (1902)"
      ],
      [
        103.8198,
        1.3521,
        "Singapore - Singapore - March 24, Guangxu 28th Year (1902)"
      ],
      [
        5.3698,
        43.2965,
        "Marseille - France - April 18, Guangxu 28th Year (1902)"
      ],
      [
        -0.1276,
        51.5072,
        "London - UK - April 22, Guangxu 28th Year (1902)"
      ],
      [
        4.3517,
        50.8503,
        "Brussels - Belgium - May 25, Guangxu 28th Year (1902)"
      ],
      [
        2.3522,
        48.8566,
        "Paris - France - June 6, Guangxu 28th Year (1902)"
      ],
      [
        2.3522,
        48.8566,
        "Paris - France - June 29, Guangxu 28th Year (1902)"
      ],
      [
        -74.006,
        40.7128,
        "New York - USA - July 6, Guangxu 28th Year (1902)"
      ],
      [
        139.6917,
        35.6895,
        "Tokyo - Japan - July 29, Guangxu 28th Year (1902)"
      ]
    ]
  },
  {
    "name": "Private Notes from British Mission - Liu Xihong",
    "color": "#4ecdc4",
    "coordinates": [
      [
        116.4074,
        39.9042,
        "Beijing - China - August 15, Guangxu 2nd Year (1876)"
      ],
      [
        116.4074,
        39.9042,
        "Beijing - China - September 28, Guangxu 2nd Year (1876)"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - October 18, Guangxu 2nd Year (1876)"
      ],
      [
        -0.1276,
        51.5074,
        "London - UK - December 8, Guangxu 2nd Year (1876)"
      ],
      [
        -0.1276,
        51.5074,
        "London - UK - April 24, Guangxu 3rd Year (1877)"
      ],
      [
        -1.8904,
        52.4862,
        "Birmingham - UK - July 15, Guangxu 3rd Year (1877)"
      ],
      [
        -6.2603,
        53.3498,
        "Dublin - Ireland - July 18, Guangxu 3rd Year (1877)"
      ],
      [
        -2.9916,
        53.4084,
        "Liverpool - UK - July 25, Guangxu 3rd Year (1877)"
      ],
      [
        -0.1276,
        51.5074,
        "London - UK - July 27, Guangxu 3rd Year (1877)"
      ],
      [
        13.405,
        52.52,
        "Berlin - Germany - October 22, Guangxu 3rd Year (1877)"
      ]
    ]
  },
  {
    "name": "My Life in China and America - Yung Wing",
    "color": "#5f27cd",
    "coordinates": [
      [
        113.4833,
        22.2167,
        "Nanping Town - China - Winter 1828"
      ],
      [
        113.5491,
        22.1987,
        "Macau - China - Summer 1835"
      ],
      [
        114.1694,
        22.3193,
        "Hong Kong - China - 1842"
      ],
      [
        113.2644,
        23.1291,
        "Guangzhou - China - January 4, 1847"
      ],
      [
        -72.9279,
        41.3163,
        "New Haven - USA - 1850"
      ],
      [
        -72.9279,
        41.3163,
        "New Haven - USA - 1854"
      ],
      [
        118.7969,
        32.0603,
        "Nanjing - China - 1860"
      ],
      [
        118.7969,
        32.0603,
        "Nanjing - China - 1863"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - 1864"
      ],
      [
        -122.4194,
        37.7749,
        "San Francisco - USA - 1865"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - 1872"
      ],
      [
        -77.0428,
        -12.0464,
        "Lima - Peru - 1873"
      ],
      [
        -77.0369,
        38.9072,
        "Washington - USA - 1875"
      ],
      [
        116.4074,
        39.9042,
        "Beijing - China - 1881"
      ],
      [
        -72.6851,
        41.7637,
        "Hartford - USA - 1883"
      ],
      [
        114.2734,
        30.5852,
        "Wuhan - China - 1895"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - 1898"
      ],
      [
        114.1694,
        22.3193,
        "Hong Kong - China - 1899"
      ],
      [
        121.5654,
        25.033,
        "Taipei - China - 1901"
      ],
      [
        -72.6851,
        41.7637,
        "Hartford - USA - 1909"
      ],
      [
        -72.6851,
        41.7637,
        "Hartford - USA - 1912"
      ]
    ]
  },
  {
    "name": "Records of Western Journey - Zou Daijun",
    "color": "#45b7d1",
    "coordinates": [
      [
        121.4737,
        31.2304,
        "Shanghai - China - February 13, Guangxu 12th Year (1886)"
      ],
      [
        5.3698,
        43.2965,
        "Marseille - France - March 21, Guangxu 12th Year (1886)"
      ],
      [
        2.3522,
        48.8566,
        "Paris - France - March 23, Guangxu 12th Year (1886)"
      ],
      [
        -0.1276,
        51.5072,
        "London - UK - March 25, Guangxu 12th Year (1886)"
      ]
    ]
  },
  {
    "name": "Western Magazine - Li Shuchang",
    "color": "#4ecdc4",
    "coordinates": [
      [
        116.4074,
        39.9042,
        "Beijing - China - December, Guangxu 2nd Year (1876)"
      ],
      [
        13.405,
        52.52,
        "Berlin - Germany - October, Guangxu 3rd Year (1877)"
      ],
      [
        2.3522,
        48.8566,
        "Paris - France - April, Guangxu 4th Year (1878)"
      ],
      [
        8.2275,
        46.8182,
        "Switzerland - Switzerland - January, Guangxu 5th Year (1879)"
      ],
      [
        2.3522,
        48.8566,
        "Southern France - France - July, Guangxu 5th Year (1879)"
      ],
      [
        -3.7038,
        40.4168,
        "Madrid - Spain - February, Guangxu 6th Year (1880)"
      ],
      [
        -3.7038,
        40.4168,
        "Southern Spain - Spain - May, Guangxu 6th Year (1880)"
      ],
      [
        2.3522,
        48.8566,
        "Western France - France - February, Guangxu 7th Year (1881)"
      ],
      [
        -0.1276,
        51.5074,
        "London - UK - July, Guangxu 7th Year (1881)"
      ]
    ]
  },
  {
    "name": "Travel Notes of Western Seas - Lin Zhen",
    "color": "#45b7d1",
    "coordinates": [
      [
        113.2644,
        23.1291,
        "Guangzhou - China - February, Daoguang 27th Year (1847)"
      ],
      [
        -74.006,
        40.7128,
        "New York - USA - June, Daoguang 27th Year (1847)"
      ],
      [
        -74.006,
        40.7128,
        "New York - USA - August, Daoguang 27th Year (1847)"
      ],
      [
        -74.006,
        40.7128,
        "New York - USA - September, Daoguang 27th Year (1847)"
      ],
      [
        -74.006,
        40.7128,
        "New York - USA - July, Daoguang 28th Year (1848)"
      ],
      [
        118.0894,
        24.4798,
        "Xiamen - China - February, Daoguang 29th Year (1849)"
      ],
      [
        118.0894,
        24.4798,
        "Xiamen - China - Intercalary April, Daoguang 29th Year (1849)"
      ]
    ]
  },
  {
    "name": "Records of Western Seas Journey - Pan Feisheng",
    "color": "#96ceb4",
    "coordinates": [
      [
        114.1694,
        22.3193,
        "Hong Kong - China - July 14, Guangxu 13th Year (1887)"
      ],
      [
        103.8198,
        1.3521,
        "Singapore - Singapore - July 19, Guangxu 13th Year (1887)"
      ],
      [
        79.8612,
        6.9271,
        "Ceylon - Sri Lanka - July 25, Guangxu 13th Year (1887)"
      ],
      [
        45.0187,
        12.7855,
        "Aden - Yemen - August 4, Guangxu 13th Year (1887)"
      ],
      [
        12.4964,
        41.9028,
        "Rome - Italy - August 14, Guangxu 13th Year (1887)"
      ],
      [
        8.2275,
        46.8182,
        "Bern - Switzerland - August 20, Guangxu 13th Year (1887)"
      ],
      [
        13.405,
        52.52,
        "Berlin - Germany - August 22, Guangxu 13th Year (1887)"
      ]
    ]
  },
  {
    "name": "Diary of Western Travel - Jiang Xu",
    "color": "#45b7d1",
    "coordinates": [
      [
        114.3054,
        30.5931,
        "Wuhan - China - May 18, Guangxu 29th Year (1903)"
      ],
      [
        117.3787,
        49.5884,
        "Manzhouli - China - Intercalary May 3, Guangxu 29th Year (1903)"
      ],
      [
        37.6173,
        55.7558,
        "Moscow - Russia - Intercalary May 12, Guangxu 29th Year (1903)"
      ],
      [
        13.405,
        52.52,
        "Berlin - Germany - Intercalary May 16, Guangxu 29th Year (1903)"
      ],
      [
        10.4515,
        51.1657,
        "Erfurt - Germany - October 3, Guangxu 29th Year (1903)"
      ],
      [
        117.3787,
        49.5884,
        "Manzhouli - China - October 17, Guangxu 29th Year (1903)"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - October 21, Guangxu 29th Year (1903)"
      ]
    ]
  },
  {
    "name": "Records of Overseas Travel - Wang Zhichun",
    "color": "#ff6b6b",
    "coordinates": [
      [
        121.4737,
        31.2304,
        "Shanghai - China - October 21, Guangxu 5th Year (1879)"
      ],
      [
        135.1955,
        34.6901,
        "Kobe - Japan - October 25, Guangxu 5th Year (1879)"
      ],
      [
        139.638,
        35.4437,
        "Yokohama - Japan - October 29, Guangxu 5th Year (1879)"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - November 24, Guangxu 5th Year (1879)"
      ]
    ]
  },
  {
    "name": "Records of Accompanying Mission to France - Zhang Deyi",
    "color": "#ff9ff3",
    "coordinates": [
      [
        116.4074,
        39.9042,
        "Beijing - China - June 6, Tongzhi 9th Year (1870)"
      ],
      [
        116.4074,
        39.9042,
        "Beijing - China - October 2, Tongzhi 9th Year (1870)"
      ],
      [
        5.3698,
        43.2965,
        "Marseille - France - December 5, Tongzhi 9th Year (1870)"
      ],
      [
        -0.5792,
        44.8378,
        "Bordeaux - France - Before December 14, Tongzhi 9th Year (1870)"
      ],
      [
        2.3522,
        48.8566,
        "Paris - France - January 27, Tongzhi 10th Year (1871)"
      ],
      [
        2.3522,
        48.8566,
        "Paris - France - January 28, Tongzhi 10th Year (1871)"
      ],
      [
        -0.5792,
        44.8378,
        "Bordeaux - France - January 29, Tongzhi 10th Year (1871)"
      ],
      [
        2.1204,
        48.8014,
        "Versailles - France - February 10, Tongzhi 10th Year (1871)"
      ],
      [
        2.3522,
        48.8566,
        "Paris - France - April 24, Tongzhi 10th Year (1871)"
      ],
      [
        -0.1276,
        51.5074,
        "London - UK - July 6, Tongzhi 10th Year (1871)"
      ],
      [
        -0.1276,
        51.5074,
        "London - UK - July 13, Tongzhi 10th Year (1871)"
      ],
      [
        -74.006,
        40.7128,
        "New York - USA - July 27, Tongzhi 10th Year (1871)"
      ],
      [
        -74.006,
        40.7128,
        "New York - USA - August 9, Tongzhi 10th Year (1871)"
      ],
      [
        2.3522,
        48.8566,
        "Paris - France - October 25, Tongzhi 10th Year (1871)"
      ],
      [
        116.4074,
        39.9042,
        "Beijing - China - January 25, Tongzhi 11th Year (1872)"
      ]
    ]
  },
  {
    "name": "Records of Accompanying Mission to Britain and Russia - Zhang Deyi",
    "color": "#ff9ff3",
    "coordinates": [
      [
        116.4074,
        39.9042,
        "Beijing - China - September 15, Guangxu 2nd Year (1876)"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - October 17, Guangxu 2nd Year (1876)"
      ],
      [
        -0.1276,
        51.5074,
        "London - UK - December 8, Guangxu 2nd Year (1876)"
      ],
      [
        -0.1276,
        51.5074,
        "London - UK - January 21, Guangxu 3rd Year (1877)"
      ],
      [
        -0.1276,
        51.5074,
        "London - UK - February 1, Guangxu 3rd Year (1877)"
      ],
      [
        2.3522,
        48.8566,
        "Paris - France - Before February 28, Guangxu 4th Year (1878)"
      ],
      [
        -0.1276,
        51.5074,
        "London - UK - April 13, Guangxu 4th Year (1878)"
      ],
      [
        2.3522,
        48.8566,
        "Paris - France - November 21, Guangxu 4th Year (1878)"
      ],
      [
        30.3351,
        59.9343,
        "St. Petersburg - Russia - January 6, Guangxu 6th Year (1880)"
      ],
      [
        2.3522,
        48.8566,
        "Paris - France - January 22, Guangxu 6th Year (1880)"
      ],
      [
        -0.1276,
        51.5074,
        "London - UK - May 24, Guangxu 6th Year (1880)"
      ],
      [
        116.4074,
        39.9042,
        "Beijing - China - July 30, Guangxu 6th Year (1880)"
      ]
    ]
  },
  {
    "name": "Notes of Accompanying Political Investigation - Jin Ding",
    "color": "#96ceb4",
    "coordinates": [
      [
        121.4737,
        31.2304,
        "Shanghai - China - November 23, Guangxu 31st Year (1905)"
      ],
      [
        139.638,
        35.4437,
        "Yokohama - Japan - November 29, Guangxu 31st Year (1905)"
      ],
      [
        -122.4194,
        37.7749,
        "San Francisco - USA - December 18, Guangxu 31st Year (1905)"
      ],
      [
        -77.0369,
        38.9072,
        "Washington - USA - November 29, Guangxu 31st Year (1905)"
      ],
      [
        -0.1276,
        51.5072,
        "London - UK - February 2, Guangxu 32nd Year (1906)"
      ],
      [
        2.3522,
        48.8566,
        "Paris - France - February 6, Guangxu 32nd Year (1906)"
      ],
      [
        13.405,
        52.52,
        "Berlin - Germany - February 13, Guangxu 32nd Year (1906)"
      ],
      [
        30.3351,
        59.9343,
        "St. Petersburg - Russia - March 29, Guangxu 32nd Year (1906)"
      ],
      [
        16.3738,
        48.2082,
        "Vienna - Austria - April 8, Guangxu 32nd Year (1906)"
      ],
      [
        12.4964,
        41.9028,
        "Rome - Italy - April 26, Guangxu 32nd Year (1906)"
      ],
      [
        32.5498,
        29.983,
        "Suez - Egypt - Intercalary April 6, Guangxu 32nd Year (1906)"
      ],
      [
        45.0187,
        12.7855,
        "Aden - Yemen - Intercalary April 11, Guangxu 32nd Year (1906)"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - May 3, Guangxu 32nd Year (1906)"
      ]
    ]
  },
  {
    "name": "Notes from Accompanying Mission - Wu Zonglian",
    "color": "#4ecdc4",
    "coordinates": [
      [
        121.4737,
        31.2304,
        "Shanghai - China - March 9, Guangxu 20th Year (1894)"
      ],
      [
        2.3522,
        48.8566,
        "Paris - France - April 16, Guangxu 20th Year (1894)"
      ],
      [
        5.0411,
        45.0415,
        "Toulon - France - From June 24, Guangxu 21st Year (1895)"
      ],
      [
        37.6173,
        55.7558,
        "Moscow - Russia - April, Guangxu 22nd Year (1896)"
      ],
      [
        4.3517,
        50.8503,
        "Brussels - Belgium - October 17, Guangxu 22nd Year (1896)"
      ],
      [
        12.4964,
        41.9028,
        "Rome - Italy - From November 1, Guangxu 22nd Year (1896)"
      ]
    ]
  },
  {
    "name": "Diary of German Mission - Li Fengbao",
    "color": "#4ecdc4",
    "coordinates": [
      [
        10.4515,
        51.1657,
        "Erfurt - Germany - Guangxu 4th Year (1878)"
      ],
      [
        10.4515,
        51.1657,
        "Erfurt - Germany - September 12, Guangxu 5th Year (1879)"
      ],
      [
        2.3522,
        48.8566,
        "Paris - France - Guangxu 10th Year (1884)"
      ]
    ]
  },
  {
    "name": "Records of Return from Beyond the Sky - Pan Feisheng",
    "color": "#96ceb4",
    "coordinates": [
      [
        13.405,
        52.52,
        "Berlin - Germany - July 11, Guangxu 16th Year (1890)"
      ],
      [
        9.19,
        45.4642,
        "Milan - Italy - July 15, Guangxu 16th Year (1890)"
      ],
      [
        45.0187,
        12.7855,
        "Aden - Yemen - August 1, Guangxu 16th Year (1890)"
      ],
      [
        79.8612,
        6.9271,
        "Ceylon - Sri Lanka - August 8, Guangxu 16th Year (1890)"
      ],
      [
        103.8198,
        1.3521,
        "Singapore - Singapore - August 14, Guangxu 16th Year (1890)"
      ],
      [
        114.1694,
        22.3193,
        "Hong Kong - China - August 22, Guangxu 16th Year (1890)"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - August 24, Guangxu 16th Year (1890)"
      ]
    ]
  },
  {
    "name": "Travel Notes of Germany and Other Countries - Kang Youwei",
    "color": "#45b7d1",
    "coordinates": [
      [
        10.4515,
        51.1657,
        "Erfurt - Germany - May 16, Guangxu 30th Year (1904)"
      ],
      [
        10.4515,
        51.1657,
        "Erfurt - Germany - November 20, Guangxu 32nd Year (1906)"
      ],
      [
        9.5018,
        56.2639,
        "Aarhus - Denmark - June 27, Guangxu 30th Year (1904)"
      ],
      [
        8.4689,
        60.472,
        "Kristiansund - Norway - July 6, Guangxu 30th Year (1904)"
      ],
      [
        18.6435,
        60.1282,
        "Stockholm - Sweden - July 8, Guangxu 30th Year (1904)"
      ],
      [
        4.3517,
        50.8503,
        "Brussels - Belgium - December 5, Guangxu 32nd Year (1906)"
      ],
      [
        5.2913,
        52.1326,
        "Amsterdam - Netherlands - August 18, Guangxu 30th Year (1904)"
      ]
    ]
  },
  {
    "name": "Bamboo Branch Songs of Berlin - Pan Feisheng",
    "color": "#96ceb4",
    "coordinates": [
      [
        13.405,
        52.52,
        "Berlin - Germany - August 22, Guangxu 13th Year (1887)"
      ],
      [
        13.405,
        52.52,
        "Berlin - Germany - July 11, Guangxu 16th Year (1890)"
      ]
    ]
  },
  {
    "name": "Diary of Tower Ship - Yu Siyi",
    "color": "#96ceb4",
    "coordinates": [
      [
        -1.6178,
        54.9783,
        "Newcastle - UK - July 2, Guangxu 13th Year (1887)"
      ],
      [
        -1.0875,
        50.7986,
        "Portsmouth - UK - July 5, Guangxu 13th Year (1887)"
      ],
      [
        -1.0875,
        50.7986,
        "Portsmouth - UK - July 6, Guangxu 13th Year (1887)"
      ],
      [
        -1.0875,
        50.7986,
        "Portsmouth - UK - July 25, Guangxu 13th Year (1887)"
      ],
      [
        114.1694,
        22.3193,
        "Hong Kong - China - October 14, Guangxu 13th Year (1887)"
      ],
      [
        118.0894,
        24.4798,
        "Xiamen - China - October 26, Guangxu 13th Year (1887)"
      ],
      [
        117.201,
        39.0842,
        "Tianjin - China - March 15, Guangxu 14th Year (1888)"
      ]
    ]
  },
  {
    "name": "Travel Notes of Britain - Kang Youwei",
    "color": "#45b7d1",
    "coordinates": [
      [
        -0.1276,
        51.5072,
        "London - UK - April, Guangxu 25th Year (1899)"
      ],
      [
        -0.1276,
        51.5072,
        "London - UK - June 7, Guangxu 30th Year (1904)"
      ],
      [
        -1.1743,
        52.3555,
        "England - UK - August 24, Guangxu 30th Year (1904)"
      ],
      [
        -0.1276,
        51.5072,
        "London - UK - September 1, Guangxu 30th Year (1904)"
      ],
      [
        -2.9916,
        53.4084,
        "Liverpool - UK - September 24, Guangxu 30th Year (1904)"
      ]
    ]
  },
  {
    "name": "Travel Notes of Spain and Other Countries - Kang Youwei",
    "color": "#45b7d1",
    "coordinates": [
      [
        8.2275,
        46.8182,
        "Bern - Switzerland - Summer May, Guangxu 30th Year (1904)"
      ],
      [
        8.2275,
        46.8182,
        "Bern - Switzerland - Autumn July, Guangxu 32nd Year (1906)"
      ],
      [
        7.4246,
        43.7384,
        "Monaco - Monaco - December 12, Guangxu 32nd Year (1906)"
      ],
      [
        -3.7038,
        40.4168,
        "Madrid - Spain - December 15, Guangxu 32nd Year (1906)"
      ],
      [
        -9.1393,
        38.7223,
        "Lisbon - Portugal - January 7, Guangxu 33rd Year (1907)"
      ],
      [
        16.3738,
        48.2082,
        "Vienna - Austria - August 5, Guangxu 33rd Year (1907)"
      ],
      [
        8.2275,
        46.8182,
        "Bern - Switzerland - October 19, Guangxu 33rd Year (1907)"
      ],
      [
        16.3738,
        48.2082,
        "Vienna - Austria - October 25, Guangxu 33rd Year (1907)"
      ],
      [
        19.0402,
        47.4979,
        "Budapest - Hungary - June, Guangxu 34th Year (1908)"
      ],
      [
        20.4489,
        44.0165,
        "Belgrade - Serbia - June 23, Guangxu 34th Year (1908)"
      ],
      [
        23.7275,
        37.9838,
        "Athens - Greece - July 7, Guangxu 34th Year (1908)"
      ]
    ]
  },
  {
    "name": "Diary from Daoxizhai - Wang Yongni",
    "color": "#96ceb4",
    "coordinates": [
      [
        13.405,
        52.52,
        "Berlin - Germany - March 4, Guangxu 13th Year (1887)"
      ],
      [
        -0.1276,
        51.5072,
        "London - UK - March 5, Guangxu 13th Year (1887)"
      ],
      [
        -74.006,
        40.7128,
        "New York - USA - March 16, Guangxu 13th Year (1887)"
      ],
      [
        -77.0369,
        38.9072,
        "Washington - USA - March 21, Guangxu 13th Year (1887)"
      ],
      [
        -122.4194,
        37.7749,
        "San Francisco - USA - March 29, Guangxu 13th Year (1887)"
      ],
      [
        139.638,
        35.4437,
        "Yokohama - Japan - April 23, Guangxu 13th Year (1887)"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - Intercalary April 24, Guangxu 13th Year (1887)"
      ]
    ]
  },
  {
    "name": "Diary of Mission to USA, Japan and Peru - Cui Guoyin",
    "color": "#4ecdc4",
    "coordinates": [
      [
        -77.0369,
        38.9072,
        "Washington - USA - September 1, Guangxu 15th Year (1889)"
      ],
      [
        -3.7038,
        40.4168,
        "Madrid - Spain - March 28, Guangxu 16th Year (1890)"
      ],
      [
        -3.7038,
        40.4168,
        "Madrid - Spain - April 11, Guangxu 16th Year (1890)"
      ],
      [
        -95.7129,
        37.0902,
        "Miami - USA - May 9, Guangxu 16th Year (1890)"
      ],
      [
        -77.0369,
        38.9072,
        "Washington - USA - May 20, Guangxu 16th Year (1890)"
      ],
      [
        -75.0152,
        -9.1899,
        "Lima - Peru - January 1, Guangxu 17th Year (1891)"
      ],
      [
        -79.5167,
        8.9833,
        "Panama - Panama - January 16, Guangxu 17th Year (1891)"
      ],
      [
        -77.0428,
        -12.0464,
        "Lima - Peru - January 21, Guangxu 17th Year (1891)"
      ],
      [
        -95.7129,
        37.0902,
        "Miami - USA - February 8, Guangxu 17th Year (1891)"
      ],
      [
        -77.0369,
        38.9072,
        "Washington - USA - February 25, Guangxu 17th Year (1891)"
      ],
      [
        -82.3666,
        23.1136,
        "Havana - Cuba - January 7, Guangxu 18th Year (1892)"
      ],
      [
        -82.3666,
        23.1136,
        "Havana - Cuba - January 10, Guangxu 18th Year (1892)"
      ],
      [
        -77.0369,
        38.9072,
        "Washington - USA - January 18, Guangxu 18th Year (1892)"
      ],
      [
        104.1954,
        35.8617,
        "Lanzhou - China - July 24, Guangxu 19th Year (1893)"
      ]
    ]
  },
  {
    "name": "Miscellaneous Notes on Cuba - Tan Qianchu",
    "color": "#feca57",
    "coordinates": [
      [
        -82.3666,
        23.1136,
        "Havana - Cuba - September 12, Guangxu 5th Year (1879)"
      ]
    ]
  },
  {
    "name": "Diary of Eastern Travel - Zhou Xuexi",
    "color": "#ff6b6b",
    "coordinates": [
      [
        117.201,
        39.0842,
        "Tianjin - China - March 8, Guangxu 29th Year (1903)"
      ],
      [
        126.978,
        37.5665,
        "Seoul - South Korea - March 11, Guangxu 29th Year (1903)"
      ],
      [
        129.8738,
        32.7503,
        "Nagasaki - Japan - March 16, Guangxu 29th Year (1903)"
      ],
      [
        135.1955,
        34.6901,
        "Kobe - Japan - March 18, Guangxu 29th Year (1903)"
      ],
      [
        121.3914,
        37.54,
        "Yantai - China - May 6, Guangxu 29th Year (1903)"
      ],
      [
        117.201,
        39.0842,
        "Tianjin - China - May 9, Guangxu 29th Year (1903)"
      ]
    ]
  },
  {
    "name": "Diary of Eastern Travel - Zuo Xiangzhong",
    "color": "#ff6b6b",
    "coordinates": [
      [
        121.4737,
        31.2304,
        "Shanghai - China - February 26, Guangxu 33rd Year (1907)"
      ],
      [
        129.8738,
        32.7503,
        "Nagasaki - Japan - February 27, Guangxu 33rd Year (1907)"
      ],
      [
        139.6917,
        35.6895,
        "Tokyo - Japan - February 30, Guangxu 33rd Year (1907)"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - April 2, Guangxu 33rd Year (1907)"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - April 28, Guangxu 34th Year (1908)"
      ],
      [
        129.8738,
        32.7503,
        "Nagasaki - Japan - May 1, Guangxu 34th Year (1908)"
      ],
      [
        139.76,
        35.666,
        "Shinbashi - Japan - May 3, Guangxu 34th Year (1908)"
      ],
      [
        117.201,
        39.0842,
        "Tianjin - China - August 8, Guangxu 34th Year (1908)"
      ]
    ]
  },
  {
    "name": "Diary of Eastern Travel - Wen Kai",
    "color": "#ff6b6b",
    "coordinates": [
      [
        121.4737,
        31.2304,
        "Shanghai - China - December 23, Guangxu 32nd Year (1906)"
      ],
      [
        129.8738,
        32.7503,
        "Nagasaki - Japan - December 25, Guangxu 32nd Year (1906)"
      ],
      [
        139.6917,
        35.6895,
        "Tokyo - Japan - December 28, Guangxu 32nd Year (1906)"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - March 26, Guangxu 33rd Year (1907)"
      ]
    ]
  },
  {
    "name": "Diary of Eastern Travel - Yang Taijie",
    "color": "#ff6b6b",
    "coordinates": [
      [
        121.4737,
        31.2304,
        "Shanghai - China - December 20, Guangxu 32nd Year (1906)"
      ],
      [
        129.8738,
        32.7503,
        "Nagasaki - Japan - December 22, Guangxu 32nd Year (1906)"
      ],
      [
        139.6917,
        35.6895,
        "Tokyo - Japan - December 25, Guangxu 32nd Year (1906)"
      ],
      [
        135.5023,
        34.6937,
        "Osaka - Japan - March 22, Guangxu 33rd Year (1907)"
      ],
      [
        129.8738,
        32.7503,
        "Nagasaki - Japan - April 4, Guangxu 33rd Year (1907)"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - April 6, Guangxu 33rd Year (1907)"
      ]
    ]
  },
  {
    "name": "Diary of Eastern Travel - Shen Yiqing",
    "color": "#ff6b6b",
    "coordinates": [
      [
        121.4737,
        31.2304,
        "Shanghai - China - September 3, Guangxu 25th Year (1899)"
      ],
      [
        129.8738,
        32.7503,
        "Nagasaki - Japan - September 5, Guangxu 25th Year (1899)"
      ],
      [
        139.6917,
        35.6895,
        "Tokyo - Japan - September 10, Guangxu 25th Year (1899)"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - November 11, Guangxu 25th Year (1899)"
      ]
    ]
  },
  {
    "name": "Diary of Eastern Travel - Huang Qingcheng",
    "color": "#45b7d1",
    "coordinates": [
      [
        121.4737,
        31.2304,
        "Shanghai - China - May 4, Guangxu 19th Year (1893)"
      ],
      [
        129.872,
        32.7503,
        "Nagasaki - Japan - May 6, Guangxu 19th Year (1893)"
      ],
      [
        135.1955,
        34.6937,
        "Kobe - Japan - May 15, Guangxu 19th Year (1893)"
      ],
      [
        139.638,
        35.4437,
        "Yokohama - Japan - May 17, Guangxu 19th Year (1893)"
      ],
      [
        139.6917,
        35.6895,
        "Tokyo - Japan - May 18, Guangxu 19th Year (1893)"
      ],
      [
        139.638,
        35.4437,
        "Yokohama - Japan - June 4, Guangxu 19th Year (1893)"
      ],
      [
        135.768,
        35.0116,
        "Kyoto - Japan - June 22, Guangxu 19th Year (1893)"
      ],
      [
        121.4737,
        31.2304,
        "Shanghai - China - July 4, Guangxu 19th Year (1893)"
      ]
    ]
  }
];

// 全局变量存储所有节点和连接线
var allNodes = [];
var allLinks = [];
var myChart; // 图表实例
var currentHighlightedPath = -1; // 当前高亮的路径索引

// 处理所有路径数据
function processAllPaths(pathGroups) {
  allNodes = [];
  allLinks = [];
  var nodeMap = new Map();
  var nodeCounter = 0;
  
  // 第一遍：创建所有唯一节点
  for (var groupIndex = 0; groupIndex < pathGroups.length; groupIndex++) {
    var group = pathGroups[groupIndex];
    for (var coordIndex = 0; coordIndex < group.coordinates.length; coordIndex++) {
      var coord = group.coordinates[coordIndex];
      var coordKey = coord[0] + ',' + coord[1];
      
      if (!nodeMap.has(coordKey)) {
        var nodeName = 'node_' + nodeCounter;
        nodeMap.set(coordKey, nodeName);
        
        allNodes.push({
          name: nodeName,
          value: [coord[0], coord[1]],
          symbolSize: 8,
          itemStyle: { color: group.color },
          originalName: coord[2],
          pathGroupIndex: groupIndex
        });
        nodeCounter++;
      }
    }
  }
  
  // 第二遍：创建连接线
  for (var groupIndex = 0; groupIndex < pathGroups.length; groupIndex++) {
    var group = pathGroups[groupIndex];
    for (var coordIndex = 0; coordIndex < group.coordinates.length - 1; coordIndex++) {
      var sourceCoord = group.coordinates[coordIndex];
      var targetCoord = group.coordinates[coordIndex + 1];
      
      var sourceKey = sourceCoord[0] + ',' + sourceCoord[1];
      var targetKey = targetCoord[0] + ',' + targetCoord[1];
      
      var sourceNodeName = nodeMap.get(sourceKey);
      var targetNodeName = nodeMap.get(targetKey);
      
      allLinks.push({
        source: sourceNodeName,
        target: targetNodeName,
        lineStyle: {
          color: group.color,
          width: 1,
          curveness: 0.2
        },
        pathGroupIndex: groupIndex,
        groupIndex: groupIndex,
        groupName: group.name
      });
    }
  }
  
  console.log('节点数量:', allNodes.length);
  console.log('连接线数量:', allLinks.length);
}

// 为路径组分配随机颜色
assignColorsToPaths(pathGroups);

// 高亮指定路径
function highlightPath(pathGroupIndex) {
  if (!myChart) return;
  
  currentHighlightedPath = pathGroupIndex;
  var group = pathGroups[pathGroupIndex];
  
  // 更新图表配置
  var newOption = {
    series: [{
      type: 'graph',
      layout: 'none',
      coordinateSystem: 'geo',
      symbolSize: 8,
      roam: true,
      label: {
        show: false,
        formatter: function() {
          return '';
        }
      },
      edgeSymbol: ['circle', 'arrow'],
      edgeSymbolSize: [4, 8],
      data: allNodes.map(function(node) {
        var isHighlighted = node.pathGroupIndex === pathGroupIndex;
        return {
          name: node.name,
          value: node.value,
          symbolSize: isHighlighted ? 12 : 6,
          itemStyle: { 
            color: isHighlighted ? group.color : '#ccc',
            opacity: isHighlighted ? 1 : 0.3
          },
          originalName: node.originalName,
          pathGroupIndex: node.pathGroupIndex
        };
      }),
      links: allLinks.map(function(link) {
        var isHighlighted = link.pathGroupIndex === pathGroupIndex;
        return {
          source: link.source,
          target: link.target,
          lineStyle: {
            color: isHighlighted ? group.color : '#ddd',
            width: isHighlighted ? 2 : 0.5,
            curveness: 0.2,
            opacity: isHighlighted ? 1 : 0.3
          },
          pathGroupIndex: link.pathGroupIndex
        };
      }),
      lineStyle: {
        opacity: 0.9,
        width: 1,
        curveness: 0.2
      },
      emphasis: {
        focus: 'adjacency',
        lineStyle: {
          width: 4,
          curveness: 0.2,
          color: '#ff6b6b',
          shadowBlur: 10,
          shadowColor: 'rgba(255, 107, 107, 0.5)'
        },
        itemStyle: {
          borderWidth: 3,
          borderColor: '#ff6b6b',
          shadowBlur: 8,
          shadowColor: 'rgba(255, 107, 107, 0.6)'
        },
      }
    }]
  };
  
  myChart.setOption(newOption, false);
}

// 取消高亮
function clearHighlight() {
  if (!myChart) return;
  
  currentHighlightedPath = -1;
  
  // 恢复原始配置
  var newOption = {
    series: [{
      type: 'graph',
      layout: 'none',
      coordinateSystem: 'geo',
      symbolSize: 8,
      roam: true,
      label: {
        show: false,
        formatter: function() {
          return '';
        }
      },
      edgeSymbol: ['circle', 'arrow'],
      edgeSymbolSize: [4, 8],
      data: allNodes.map(function(node) {
        var group = pathGroups[node.pathGroupIndex];
        return {
          name: node.name,
          value: node.value,
          symbolSize: 8,
          itemStyle: { 
            color: group.color,
            opacity: 1
          },
          originalName: node.originalName,
          pathGroupIndex: node.pathGroupIndex
        };
      }),
      links: allLinks.map(function(link) {
        var group = pathGroups[link.pathGroupIndex];
        return {
          source: link.source,
          target: link.target,
          lineStyle: {
            color: group.color,
            width: 1,
            curveness: 0.2,
            opacity: 1
          },
          pathGroupIndex: link.pathGroupIndex
        };
      }),
      lineStyle: {
        opacity: 0.9,
        width: 1,
        curveness: 0.2
      },
      emphasis: {
        focus: 'adjacency',
        lineStyle: {
          width: 4,
          curveness: 0.2,
          color: '#ff6b6b',
          shadowBlur: 10,
          shadowColor: 'rgba(255, 107, 107, 0.5)'
        },
        itemStyle: {
          borderWidth: 3,
          borderColor: '#ff6b6b',
          shadowBlur: 8,
          shadowColor: 'rgba(255, 107, 107, 0.6)'
        },
      }
    }]
  };
  
  myChart.setOption(newOption, false);
}

// 处理数据
processAllPaths(pathGroups);

option = {
  backgroundColor: '#fff',
  title: {
    text: 'Study Tour Route Map',
    left: 'center',
    textStyle: {
      color: '#000',
      fontSize: 20
    }
  },
  legend: {
    data: pathGroups.map(function(group) { return group.name; }),
    top: 30,
    left: 'center'
  },
  // 添加出游性质颜色图例
  graphic: [
    {
      type: 'group',
      left: 20,
      bottom: 20,
      children: [
        {
          type: 'rect',
          shape: {
            width: 230,
            height: 300
          },
          style: {
            fill: 'rgba(255, 255, 255, 0.95)',
            stroke: '#999',
            lineWidth: 2
          }
        },
        {
          type: 'text',
          left: 10,
          top: 10,
          style: {
            text: 'Travel Purpose Legend',
            fontSize: 14,
            fontWeight: 'bold',
            fill: '#333'
          }
        },
        {
          type: 'group',
          left: 10,
          top: 35,
          onclick: function() {
            togglePathVisibility('Official Inspection');
          },
          children: [
            {
              type: 'circle',
              shape: {
                cx: 6,
                cy: 6,
                r: 4
              },
              style: {
                fill: '#ff6b6b'
              }
            },
            {
              type: 'text',
              left: 15,
              top: 2,
              style: {
                text: 'Official Inspection',
                fontSize: 11,
                fill: '#ff6b6b'
              }
            }
          ]
        },
        {
          type: 'group',
          left: 10,
          top: 55,
          onclick: function() {
            togglePathVisibility('Diplomatic Mission');
          },
          children: [
            {
              type: 'circle',
              shape: {
                cx: 6,
                cy: 6,
                r: 4
              },
              style: {
                fill: '#4ecdc4'
              }
            },
            {
              type: 'text',
              left: 15,
              top: 2,
              style: {
                text: 'Diplomatic Mission',
                fontSize: 11,
                fill: '#4ecdc4'
              }
            }
          ]
        },
        {
          type: 'group',
          left: 10,
          top: 75,
          onclick: function() {
            togglePathVisibility('Private Travel');
          },
          children: [
            {
              type: 'circle',
              shape: {
                cx: 6,
                cy: 6,
                r: 4
              },
              style: {
                fill: '#45b7d1'
              }
            },
            {
              type: 'text',
              left: 15,
              top: 2,
              style: {
                text: 'Private Travel',
                fontSize: 11,
                fill: '#45b7d1'
              }
            }
          ]
        },
        {
          type: 'group',
          left: 10,
          top: 95,
          children: [
            {
              type: 'circle',
              shape: {
                cx: 6,
                cy: 6,
                r: 4
              },
              style: {
                fill: '#96ceb4'
              }
            },
            {
              type: 'text',
              left: 15,
              top: 2,
              style: {
                text: 'Accompanying Mission Investigation',
                fontSize: 11,
                fill: '#96ceb4'
              }
            }
          ]
        },
        {
          type: 'group',
          left: 10,
          top: 115,
          children: [
            {
              type: 'circle',
              shape: {
                cx: 6,
                cy: 6,
                r: 4
              },
              style: {
                fill: '#feca57'
              }
            },
            {
              type: 'text',
              left: 15,
              top: 2,
              style: {
                text: 'Official Investigation',
                fontSize: 11,
                fill: '#feca57'
              }
            }
          ]
        },
        {
          type: 'group',
          left: 10,
          top: 135,
          children: [
            {
              type: 'circle',
              shape: {
                cx: 6,
                cy: 6,
                r: 4
              },
              style: {
                fill: '#ff9ff3'
              }
            },
            {
              type: 'text',
              left: 15,
              top: 2,
              style: {
                text: 'Accompanying Mission Duty',
                fontSize: 11,
                fill: '#ff9ff3'
              }
            }
          ]
        },
        {
          type: 'group',
          left: 10,
          top: 155,
          children: [
            {
              type: 'circle',
              shape: {
                cx: 6,
                cy: 6,
                r: 4
              },
              style: {
                fill: '#54a0ff'
              }
            },
            {
              type: 'text',
              left: 15,
              top: 2,
              style: {
                text: 'Official Observation',
                fontSize: 11,
                fill: '#54a0ff'
              }
            }
          ]
        },
        {
          type: 'group',
          left: 10,
          top: 175,
          children: [
            {
              type: 'circle',
              shape: {
                cx: 6,
                cy: 6,
                r: 4
              },
              style: {
                fill: '#5f27cd'
              }
            },
            {
              type: 'text',
              left: 15,
              top: 2,
              style: {
                text: 'Private Study Abroad',
                fontSize: 11,
                fill: '#5f27cd'
              }
            }
          ]
        },
        {
          type: 'group',
          left: 10,
          top: 195,
          children: [
            {
              type: 'circle',
              shape: {
                cx: 6,
                cy: 6,
                r: 4
              },
              style: {
                fill: '#00d2d3'
              }
            },
            {
              type: 'text',
              left: 15,
              top: 2,
              style: {
                text: 'Official Escort',
                fontSize: 11,
                fill: '#00d2d3'
              }
            }
          ]
        },
        {
          type: 'group',
          left: 10,
          top: 215,
          children: [
            {
              type: 'circle',
              shape: {
                cx: 6,
                cy: 6,
                r: 4
              },
              style: {
                fill: '#ff9f43'
              }
            },
            {
              type: 'text',
              left: 15,
              top: 2,
              style: {
                text: 'Official Conference Attendance',
                fontSize: 11,
                fill: '#ff9f43'
              }
            }
          ]
        },
        {
          type: 'group',
          left: 10,
          top: 235,
          children: [
            {
              type: 'circle',
              shape: {
                cx: 6,
                cy: 6,
                r: 4
              },
              style: {
                fill: '#10ac84'
              }
            },
            {
              type: 'text',
              left: 15,
              top: 2,
              style: {
                text: 'Official Attendant',
                fontSize: 11,
                fill: '#10ac84'
              }
            }
          ]
        },
        {
          type: 'group',
          left: 10,
          top: 255,
          children: [
            {
              type: 'circle',
              shape: {
                cx: 6,
                cy: 6,
                r: 4
              },
              style: {
                fill: '#ee5a24'
              }
            },
            {
              type: 'text',
              left: 15,
              top: 2,
              style: {
                text: 'Family Accompanying',
                fontSize: 11,
                fill: '#ee5a24'
              }
            }
          ]
        },
        {
          type: 'group',
          left: 10,
          top: 275,
          children: [
            {
              type: 'circle',
              shape: {
                cx: 6,
                cy: 6,
                r: 4
              },
              style: {
                fill: '#a29bfe'
              }
            },
            {
              type: 'text',
              left: 15,
              top: 2,
              style: {
                text: 'Military Interpreter',
                fontSize: 11,
                fill: '#a29bfe'
              }
            }
          ]
        }
      ]
    }
  ],
  tooltip: {
    trigger: 'item',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderColor: '#ccc',
    borderWidth: 1,
    textStyle: {
      color: '#fff',
      fontSize: 12
    },
    confine: true,
    extraCssText: 'max-width: 300px; word-wrap: break-word; white-space: normal;',
    formatter: function(params) {
      if (params.dataType === 'node') {
        var originalName = params.data.originalName;
        if (originalName && originalName.includes('-')) {
          var parts = originalName.split('-');
          if (parts.length >= 2) {
            return '<div style="padding: 5px;">' +
                   '<div style="font-weight: bold; margin-bottom: 3px;">📍 ' + parts[0] + '</div>' +
                   '<div style="margin-bottom: 2px;">🌍 ' + parts[1] + '</div>' +
                   '<div style="font-size: 10px; color: #999; margin-top: 3px;">Click to view full study tour route</div>' +
                   '</div>';
          }
        }
        // 如果没有originalName或格式不正确，返回空字符串，不显示任何内容
        return '';
      } else if (params.dataType === 'edge') {
        var sourceNode = allNodes.find(function(n) { return n.name === params.data.source; });
        var targetNode = allNodes.find(function(n) { return n.name === params.data.target; });
        var sourceName = sourceNode ? sourceNode.originalName : params.data.source;
        var targetName = targetNode ? targetNode.originalName : params.data.target;
        
        // 解析源城市和目标城市信息
        var sourceCity = '', sourceCountry = '';
        var targetCity = '', targetCountry = '';
        
        if (sourceName && sourceName.includes('-')) {
          var sourceParts = sourceName.split('-');
          sourceCity = sourceParts[0];
          sourceCountry = sourceParts[1];
        }
        
        if (targetName && targetName.includes('-')) {
          var targetParts = targetName.split('-');
          targetCity = targetParts[0];
          targetCountry = targetParts[1];
        }
        
        // 获取路径组信息
        var pathGroupIndex = params.data.pathGroupIndex || params.data.groupIndex;
        if (pathGroupIndex !== undefined && pathGroups[pathGroupIndex]) {
          var group = pathGroups[pathGroupIndex];
          
          // 显示完整路径，突出当前连线
          var pathItems = [];
          var currentEdgeStartIndex = -1;
          var currentEdgeEndIndex = -1;
          
          // 找到当前连线的起点和终点在路径中的位置
          for (var i = 0; i < group.coordinates.length; i++) {
            var coord = group.coordinates[i];
            var coordName = coord[2];
            if (coordName && coordName.includes('-')) {
              var parts = coordName.split('-');
              if (parts.length >= 2) {
                var cityName = parts[0];
                // 更精确的匹配逻辑
                if (sourceCity === cityName || sourceName.includes(cityName)) {
                  currentEdgeStartIndex = i;
                }
                if (targetCity === cityName || targetName.includes(cityName)) {
                  currentEdgeEndIndex = i;
                }
              }
            }
          }
          
          // 获取出游性质
          var travelNature = getTravelNature(group.name);
          var natureColor = getColorByTravelNature(group.name);
          
          // 构建 pathInfo
          var pathInfo = '<div style="padding: 5px;">' +
                        '<div style="font-weight: bold; margin-bottom: 5px;">📚 ' + group.name + '</div>' +
                        '<div style="font-size: 11px; color: ' + natureColor + '; margin: 5px 0; font-weight: bold;">🏷️ Travel Purpose: ' + travelNature + '</div>' +
                        '<div style="font-size: 11px; color: #ccc; margin: 8px 0 5px 0;">Complete Study Tour Route: </div>';
          
          // 构建路径显示
          for (var i = 0; i < group.coordinates.length; i++) {
            var coord = group.coordinates[i];
            var coordName = coord[2];
            if (coordName && coordName.includes('-')) {
              var parts = coordName.split('-');
              if (parts.length >= 2) {
                var isCurrentEdgeStart = (i === currentEdgeStartIndex);
                var isCurrentEdgeEnd = (i === currentEdgeEndIndex);
                var isCurrentEdge = isCurrentEdgeStart || isCurrentEdgeEnd;
                
                var color = isCurrentEdge ? '#ff6b6b' : '#666';
                var weight = isCurrentEdge ? 'bold' : 'normal';
                var background = isCurrentEdge ? 'rgba(255, 107, 107, 0.3)' : 'transparent';
                var padding = isCurrentEdge ? '3px 6px' : '0';
                var borderRadius = isCurrentEdge ? '4px' : '0';
                var fontSize = isCurrentEdge ? '13px' : '12px';
                
                var item = '<span style="color: ' + color + '; font-weight: ' + weight + '; background: ' + background + '; padding: ' + padding + '; border-radius: ' + borderRadius + '; font-size: ' + fontSize + '; margin: 0 2px; display: inline-block;">[' + parts[1] + ']' + parts[0] + '</span>';
                pathItems.push(item);
              }
            }
          }
          
          if (pathItems.length > 0) {
            // 将路径分成多行显示，每行最多显示3个地点
            var maxItemsPerLine = 3;
            var lines = [];
            for (var j = 0; j < pathItems.length; j += maxItemsPerLine) {
              var lineItems = pathItems.slice(j, j + maxItemsPerLine);
              lines.push(lineItems.join(' → '));
            }
            pathInfo += '<div style="margin: 5px 0; line-height: 1.4;">' + lines.join('<br/>') + '</div>';
          }
          
          pathInfo += '</div>';
          return pathInfo;
        } else {
          return '<div style="padding: 5px;">' +
                 '<div style="font-weight: bold; margin-bottom: 5px;">Travel Route</div>' +
                 '<div style="margin: 5px 0; padding: 3px; background: rgba(255, 107, 107, 0.1); border-radius: 3px;">' +
                 '<div style="color: #ff6b6b; font-weight: bold;">📍 ' + sourceCity + ' [' + sourceCountry + ']</div>' +
                 '<div style="text-align: center; color: #ff6b6b; font-size: 14px;">↓</div>' +
                 '<div style="color: #ff6b6b; font-weight: bold;">📍 ' + targetCity + ' [' + targetCountry + ']</div>' +
                 '</div>' +
                 '</div>';
        }
      }
      // 对于其他情况，不显示任何内容
      return '';
    },
    enterable: true,
    confine: true
  },
  animationDurationUpdate: 1500,
  animationEasingUpdate: 'quinticInOut',
  geo: {
    map: 'world',
    roam: true,
    label: {
      show: false,
      formatter: function() {
        return '';
      }
    },
    itemStyle: {
      normal: {
        areaColor: '#eee',
        borderColor: '#d8d8d8'
      },
      emphasis: {
        areaColor: '#2a333d'
      }
    }
  },
  series: [
    {
      type: 'graph',
      layout: 'none',
      coordinateSystem: 'geo',
      symbolSize: 8,
      roam: true,
      label: {
        show: false,
        formatter: function() {
          return '';
        }
      },
      edgeSymbol: ['circle', 'arrow'],
      edgeSymbolSize: [4, 8],
      data: allNodes,
      links: allLinks,
      emphasis: {
        focus: 'adjacency',
        lineStyle: {
          width: 4,
          curveness: 0.2,
          color: '#ff6b6b',
          shadowBlur: 10,
          shadowColor: 'rgba(255, 107, 107, 0.5)'
        },
        itemStyle: {
          borderWidth: 3,
          borderColor: '#ff6b6b',
          shadowBlur: 8,
          shadowColor: 'rgba(255, 107, 107, 0.6)'
        }
      },
      lineStyle: {
        opacity: 0.9,
        width: 1,
        curveness: 0.2
      }
    }
  ]
};

// 初始化图表
function initChart() {
  var chartContainer = document.getElementById('chart-container');
  myChart = echarts.init(chartContainer);
  
  // 设置图表配置
  myChart.setOption(option);
  
  // 添加鼠标事件监听器
  myChart.on('mouseover', function(params) {
    console.log('Mouse over event:', params.dataType, params.data);
    if (params.dataType === 'node' && params.data.pathGroupIndex !== undefined) {
      console.log('Highlighting path for node:', params.data.pathGroupIndex);
      highlightPath(params.data.pathGroupIndex);
    } else if (params.dataType === 'edge') {
      // 尝试从不同属性获取路径组信息
      var pathGroupIndex = params.data.pathGroupIndex || params.data.groupIndex;
      if (pathGroupIndex !== undefined) {
        console.log('Highlighting path for edge:', pathGroupIndex);
        highlightPath(pathGroupIndex);
      } else {
        console.log('Edge data without pathGroupIndex:', params.data);
        // 如果无法从连接线数据获取路径组信息，尝试从源节点和目标节点获取
        var sourceNode = allNodes.find(function(n) { return n.name === params.data.source; });
        var targetNode = allNodes.find(function(n) { return n.name === params.data.target; });
        if (sourceNode && sourceNode.pathGroupIndex !== undefined) {
          console.log('Highlighting path from source node:', sourceNode.pathGroupIndex);
          highlightPath(sourceNode.pathGroupIndex);
        }
      }
    }
  });
  
  myChart.on('mouseout', function(params) {
    // 延迟取消高亮，避免快速移动鼠标时闪烁
    setTimeout(function() {
      if (currentHighlightedPath !== -1) {
        clearHighlight();
      }
    }, 100);
  });
  
  console.log('Final Configuration:', option.series[0]);
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
  initChart();
  
  // 添加鼠标事件处理，实现按路径组淡化效果
  myChart.on('mouseover', function(params) {
    console.log('Mouse hover event triggered:', params);
    console.log('Data type:', params.dataType);
    console.log('Parameter data:', params.data);
    
    if (params.dataType === 'edge') {
      var currentPathGroupIndex = params.data.pathGroupIndex || params.data.groupIndex;
      console.log('Mouse hovering on edge, current path group index:', currentPathGroupIndex);
      
      if (currentPathGroupIndex !== undefined) {
        // 更新所有连线的透明度
        var updatedLinks = allLinks.map(function(link) {
          var linkPathGroupIndex = link.pathGroupIndex || link.groupIndex;
          var newLink = JSON.parse(JSON.stringify(link)); // 深拷贝
          
          if (linkPathGroupIndex === currentPathGroupIndex) {
            // 当前路径组的连线保持正常显示
            if (!newLink.lineStyle) newLink.lineStyle = {};
            newLink.lineStyle.opacity = 1;
            console.log('Keep edge normal display:', link.source, '->', link.target);
          } else {
            // 其他路径组的连线变淡
            if (!newLink.lineStyle) newLink.lineStyle = {};
            newLink.lineStyle.opacity = 0.1;
            console.log('Dim edge:', link.source, '->', link.target, 'Path group:', linkPathGroupIndex);
          }
          return newLink;
        });
        
        // 更新所有节点的透明度
        var updatedNodes = allNodes.map(function(node) {
          var nodePathGroupIndex = node.pathGroupIndex || node.groupIndex;
          var newNode = JSON.parse(JSON.stringify(node)); // 深拷贝
          
          if (nodePathGroupIndex === currentPathGroupIndex) {
            // 当前路径组的节点保持正常显示
            if (!newNode.itemStyle) newNode.itemStyle = {};
            newNode.itemStyle.opacity = 1;
          } else {
            // 其他路径组的节点变淡
            if (!newNode.itemStyle) newNode.itemStyle = {};
            newNode.itemStyle.opacity = 0.1;
          }
          return newNode;
        });
        
        // 更新图表
        myChart.setOption({
          series: [{
            data: updatedNodes,
            links: updatedLinks
          }]
        }, false);
      }
    }
  });
  
  // 添加通用事件监听器进行调试
  myChart.on('click', function(params) {
    console.log('Click event:', params);
  });
  
  // 测试所有可能的事件
  myChart.on('mousemove', function(params) {
    if (params && params.dataType === 'edge') {
      console.log('Mouse moving on edge:', params);
    }
  });
  
  // 添加更简单的事件监听器
  myChart.getZr().on('mousemove', function(params) {
    console.log('ZRender mouse move event:', params);
  });
  
  myChart.on('mouseout', function(params) {
    console.log('Mouse leave event:', params);
    if (params.dataType === 'edge') {
      console.log('Mouse left edge, restore all opacity');
      
      // 恢复所有连线和节点的正常透明度
      var restoredLinks = allLinks.map(function(link) {
        var newLink = JSON.parse(JSON.stringify(link)); // 深拷贝
        if (!newLink.lineStyle) newLink.lineStyle = {};
        newLink.lineStyle.opacity = 0.9;
        return newLink;
      });
      
      var restoredNodes = allNodes.map(function(node) {
        var newNode = JSON.parse(JSON.stringify(node)); // 深拷贝
        if (!newNode.itemStyle) newNode.itemStyle = {};
        newNode.itemStyle.opacity = 1;
        return newNode;
      });
      
      // 恢复图表
      myChart.setOption({
        series: [{
          data: restoredNodes,
          links: restoredLinks
        }]
      }, false);
    }
  });
});

