/**
 * 城市热力图 - 支持设定城市热力值并显示城市名称标注
 * https://echarts.apache.org/examples/zh/editor.html?c=scatterGL-gps&gl=1&random=l1ygoisbzh
 * 功能特性：
 * 1. 热力图显示：基于城市热力值显示颜色深浅
 * 2. 城市标注：在地图上显示所有城市名称
 * 3. 动态更新：支持实时修改城市热力值
 * 4. 交互功能：鼠标悬停显示详细信息
 * 
 * 使用说明：
 * 1. 修改 targetCities 数组中的 heatValue 来设定城市热力值（0-1之间）
 * 2. 使用 updateCityHeatValue(cityName, newHeatValue) 动态更新城市热力值
 * 3. 使用 addCity(cityName, lng, lat, heatValue) 添加新城市
 * 4. 使用 removeCity(cityName) 移除城市
 * 
 * 示例：
 * updateCityHeatValue('北京', 0.8);  // 将北京的热力值设为0.8
 * addCity('长沙', 112.9823, 28.1949, 0.6);  // 添加长沙
 * removeCity('拉萨');  // 移除拉萨
 */

// 热力图数据生成
let noise = getNoiseHelper();
noise.seed(Math.random());


// 基于counts-merged.json生成的城市热力图数据（合并后数据）
// 共113个城市，按热力值降序排列
// 热力值范围: 0.32 - 0.972

const targetCities = [
    { name: 'Shanghai', lng: 121.4737, lat: 31.2304, heatValue: 0.972 },
    { name: 'Paris', lng: 2.3522, lat: 48.8566, heatValue: 0.902 },
    { name: 'Tokyo', lng: 139.6917, lat: 35.6895, heatValue: 0.9 },
    { name: 'London', lng: -0.1276, lat: 51.5074, heatValue: 0.88 },
    { name: 'Beijing', lng: 116.4074, lat: 39.9042, heatValue: 0.813 },
    { name: 'Berlin', lng: 13.405, lat: 52.52, heatValue: 0.773 },
    { name: 'Nagasaki', lng: 129.8738, lat: 32.7503, heatValue: 0.74 },
    { name: 'Yokohama', lng: 139.638, lat: 35.4437, heatValue: 0.713 },
    { name: 'Hong Kong', lng: 114.1694, lat: 22.3193, heatValue: 0.7 },
    { name: 'San Francisco', lng: -122.4194, lat: 37.7749, heatValue: 0.66 },
    { name: 'New York', lng: -74.006, lat: 40.7128, heatValue: 0.66 },
    { name: 'Washington', lng: -77.0369, lat: 38.9072, heatValue: 0.62 },
    { name: 'Tianjin', lng: 117.201, lat: 39.0842, heatValue: 0.62 },
    { name: 'Brussels', lng: 4.3517, lat: 50.8503, heatValue: 0.6 },
    { name: 'Marseille', lng: 5.3698, lat: 43.2965, heatValue: 0.58 },
    { name: 'Rome', lng: 12.4964, lat: 41.9028, heatValue: 0.52 },
    { name: 'Kobe', lng: 135.1955, lat: 34.6901, heatValue: 0.52 },
    { name: 'Madrid', lng: -3.7038, lat: 40.4168, heatValue: 0.5 },
    { name: 'Osaka', lng: 135.5023, lat: 34.6937, heatValue: 0.5 },
    { name: 'St. Petersburg', lng: 30.3351, lat: 59.9343, heatValue: 0.5 },
    { name: 'Erfurt', lng: 10.4515, lat: 51.1657, heatValue: 0.44 },
    { name: 'Bern', lng: 8.2275, lat: 46.8182, heatValue: 0.44 },
    { name: 'Moscow', lng: 37.6173, lat: 55.7558, heatValue: 0.42 },
    { name: 'Vienna', lng: 16.3738, lat: 48.2082, heatValue: 0.42 },
    { name: 'Hartford', lng: -72.6851, lat: 41.7637, heatValue: 0.42 },
    { name: 'Singapore', lng: 103.8198, lat: 1.3521, heatValue: 0.42 },
    { name: 'Havana', lng: -82.3666, lat: 23.1136, heatValue: 0.4 },
    { name: 'Stockholm', lng: 18.0686, lat: 59.3293, heatValue: 0.4 },
    { name: 'Ceylon', lng: 79.8612, lat: 6.9271, heatValue: 0.4 },
    { name: 'Amsterdam', lng: 4.9041, lat: 52.3676, heatValue: 0.38 },
    { name: 'Copenhagen', lng: 12.5683, lat: 55.6761, heatValue: 0.38 },
    { name: 'Kyoto', lng: 135.768, lat: 35.0116, heatValue: 0.38 },
    { name: 'Lima', lng: -75.0152, lat: -9.1899, heatValue: 0.36 },
    { name: 'Guangzhou', lng: 113.2644, lat: 23.1291, heatValue: 0.36 },
    { name: 'Naples', lng: 14.2681, lat: 40.8518, heatValue: 0.36 },
    { name: 'Naha', lng: 127.6809, lat: 26.2124, heatValue: 0.36 },
    { name: 'Xiamen', lng: 118.0894, lat: 24.4798, heatValue: 0.36 },
    { name: 'Aden', lng: 45.0187, lat: 12.7855, heatValue: 0.36 },
    { name: 'Portsmouth', lng: -1.0875, lat: 50.7986, heatValue: 0.36 },
    { name: 'Suez', lng: 32.5498, lat: 29.983, heatValue: 0.36 },
    { name: 'Seoul', lng: 126.978, lat: 37.5665, heatValue: 0.34 },
    { name: 'Birmingham', lng: -1.8904, lat: 52.4862, heatValue: 0.34 },
    { name: 'Hamburg', lng: 9.9937, lat: 53.5511, heatValue: 0.34 },
    { name: 'Helsinki', lng: 24.9384, lat: 60.1699, heatValue: 0.34 },
    { name: 'Amsterdam', lng: 5.2913, lat: 52.1326, heatValue: 0.34 },
    { name: 'Honolulu', lng: -157.8583, lat: 21.3069, heatValue: 0.34 },
    { name: 'Brighton', lng: -0.1372, lat: 50.8225, heatValue: 0.34 },
    { name: 'Aarhus', lng: 9.5018, lat: 56.2639, heatValue: 0.34 },
    { name: 'Trondheim', lng: 8.4689, lat: 60.472, heatValue: 0.34 },
    { name: 'Wusong', lng: 121.4896, lat: 31.3769, heatValue: 0.34 },
    { name: 'Penang', lng: 100.3288, lat: 5.4141, heatValue: 0.34 },
    { name: 'Macau', lng: 113.5491, lat: 22.1987, heatValue: 0.34 },
    { name: 'Lanzhou', lng: 104.1954, lat: 35.8617, heatValue: 0.34 },
    { name: 'Liverpool', lng: -2.9916, lat: 53.4084, heatValue: 0.34 },
    { name: 'New Haven', lng: -72.9279, lat: 41.3163, heatValue: 0.34 },
    { name: 'Nanjing', lng: 118.7969, lat: 32.0603, heatValue: 0.34 },
    { name: 'Lima', lng: -77.0428, lat: -12.0464, heatValue: 0.34 },
    { name: 'Manzhouli', lng: 117.3787, lat: 49.5884, heatValue: 0.34 },
    { name: 'Bordeaux', lng: -0.5792, lat: 44.8378, heatValue: 0.34 },
    { name: 'Miami', lng: -95.7129, lat: 37.0902, heatValue: 0.34 },
    { name: 'Wuhan', lng: 114.2734, lat: 30.5852, heatValue: 0.34 },
    { name: 'Yantai', lng: 121.3914, lat: 37.54, heatValue: 0.32 },
    { name: 'Shinbashi', lng: 139.76, lat: 35.666, heatValue: 0.32 },
    { name: 'Oxford', lng: -1.2577, lat: 51.752, heatValue: 0.32 },
    { name: 'Manchester', lng: -2.2426, lat: 53.4808, heatValue: 0.32 },
    { name: 'Saigon', lng: 106.6297, lat: 10.8231, heatValue: 0.32 },
    { name: 'Genoa', lng: 8.9463, lat: 44.4056, heatValue: 0.32 },
    { name: 'Oslo', lng: 10.7522, lat: 59.9139, heatValue: 0.32 },
    { name: 'The Hague', lng: 4.3007, lat: 52.0705, heatValue: 0.32 },
    { name: 'Istanbul', lng: 28.9784, lat: 41.0082, heatValue: 0.32 },
    { name: 'Nikko', lng: 139.6018, lat: 36.7194, heatValue: 0.32 },
    { name: 'Canberra', lng: 149.1286, lat: -35.282, heatValue: 0.32 },
    { name: 'Ottawa', lng: -75.6972, lat: 45.4215, heatValue: 0.32 },
    { name: 'Shimoda', lng: 138.9458, lat: 34.6625, heatValue: 0.32 },
    { name: 'Fuzhou', lng: 119.3062, lat: 26.0745, heatValue: 0.32 },
    { name: 'Changsha', lng: 112.9831, lat: 28.2282, heatValue: 0.32 },
    { name: 'Odessa', lng: 30.7326, lat: 46.4825, heatValue: 0.32 },
    { name: 'Southampton', lng: -1.4044, lat: 50.9097, heatValue: 0.32 },
    { name: 'Pompeii', lng: 14.4849, lat: 40.7462, heatValue: 0.32 },
    { name: 'Boston', lng: -71.0589, lat: 42.3601, heatValue: 0.32 },
    { name: 'Tengyue', lng: 98.4973, lat: 25.0176, heatValue: 0.32 },
    { name: 'Mandalay', lng: 96.0839, lat: 21.9588, heatValue: 0.32 },
    { name: 'Yangon', lng: 96.1735, lat: 16.7967, heatValue: 0.32 },
    { name: 'Montreal', lng: -73.5673, lat: 45.5017, heatValue: 0.32 },
    { name: 'Brasilia', lng: -47.9292, lat: -15.7801, heatValue: 0.32 },
    { name: 'Springfield', lng: -93.292, lat: 37.2089, heatValue: 0.32 },
    { name: 'Suzhou', lng: 120.5853, lat: 31.299, heatValue: 0.32 },
    { name: 'Dora', lng: -3.6478, lat: 56.462, heatValue: 0.32 },
    { name: 'Philadelphia', lng: -75.1652, lat: 39.9526, heatValue: 0.32 },
    { name: 'St. Louis', lng: -90.1994, lat: 38.627, heatValue: 0.32 },
    { name: 'Xiashi Town', lng: 120.683, lat: 30.532, heatValue: 0.32 },
    { name: 'Vladivostok', lng: 131.8856, lat: 43.1155, heatValue: 0.32 },
    { name: 'Harbin', lng: 126.6424, lat: 45.7564, heatValue: 0.32 },
    { name: 'Lake Baikal', lng: 107.5841, lat: 53.5586, heatValue: 0.32 },
    { name: 'Shizuoka', lng: 138.383, lat: 34.9771, heatValue: 0.32 },
    { name: 'Shimonoseki', lng: 130.9419, lat: 33.95, heatValue: 0.32 },
    { name: 'Seattle', lng: -122.3321, lat: 47.6062, heatValue: 0.32 },
    { name: 'Hanover', lng: 9.7332, lat: 52.3759, heatValue: 0.32 },
    { name: 'Dublin', lng: -6.2603, lat: 53.3498, heatValue: 0.32 },
    { name: 'Nanping Town', lng: 113.4833, lat: 22.2167, heatValue: 0.32 },
    { name: 'Taipei', lng: 121.5654, lat: 25.033, heatValue: 0.32 },
    { name: 'Versailles', lng: 2.1204, lat: 48.8014, heatValue: 0.32 },
    { name: 'Toulon', lng: 5.0411, lat: 45.0415, heatValue: 0.32 },
    { name: 'Milan', lng: 9.19, lat: 45.4642, heatValue: 0.32 },
    { name: 'Stockholm', lng: 18.6435, lat: 60.1282, heatValue: 0.32 },
    { name: 'Newcastle', lng: -1.6178, lat: 54.9783, heatValue: 0.32 },
    { name: 'England', lng: -1.1743, lat: 52.3555, heatValue: 0.32 },
    { name: 'Monaco', lng: 7.4246, lat: 43.7384, heatValue: 0.32 },
    { name: 'Lisbon', lng: -9.1393, lat: 38.7223, heatValue: 0.32 },
    { name: 'Budapest', lng: 19.0402, lat: 47.4979, heatValue: 0.32 },
    { name: 'Belgrade', lng: 20.4489, lat: 44.0165, heatValue: 0.32 },
    { name: 'Athens', lng: 23.7275, lat: 37.9838, heatValue: 0.32 },
    { name: 'Panama', lng: -79.5167, lat: 8.9833, heatValue: 0.32 }
  ];
  
  // 导出数据
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = targetCities;
  }
  
  // 导出数据
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = targetCities;
  }
  
  
  // 导出数据
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = targetCities;
  }
  

function generateData(theta, min, max) {
  let data = [];
  // 只为设定的城市生成热力数据，使用预设的热力值
  targetCities.forEach(city => {
    // 使用设定的热力值
    let value = city.heatValue;
    // 确保热力值在0-1范围内
    value = Math.max(0, Math.min(1, value));
    data.push([city.lng, city.lat, value]);
  });
  return data;
}

let data = generateData(2, -5, 5);

// 动态更新城市热力值的函数
function updateCityHeatValue(cityName, newHeatValue) {
  const city = targetCities.find(c => c.name === cityName);
  if (city) {
    city.heatValue = Math.max(0, Math.min(1, newHeatValue));
    // 重新生成数据
    data = generateData(2, -5, 5);
    // 更新图表
    if (typeof myChart !== 'undefined') {
      myChart.setOption({
        series: [{
          data: data
        }, {
          data: targetCities.map(city => ({
            name: city.name,
            value: [city.lng, city.lat, city.heatValue]
          }))
        }]
      });
    }
    return true;
  }
  return false;
}

// 添加新城市的函数
function addCity(cityName, lng, lat, heatValue) {
  const existingCity = targetCities.find(c => c.name === cityName);
  if (!existingCity) {
    targetCities.push({
      name: cityName,
      lng: lng,
      lat: lat,
      heatValue: Math.max(0, Math.min(1, heatValue))
    });
    // 重新生成数据
    data = generateData(2, -5, 5);
    // 更新图表
    if (typeof myChart !== 'undefined') {
      myChart.setOption({
        series: [{
          data: data
        }, {
          data: targetCities.map(city => ({
            name: city.name,
            value: [city.lng, city.lat, city.heatValue]
          }))
        }]
      });
    }
    return true;
  }
  return false;
}

// 移除城市的函数
function removeCity(cityName) {
  const index = targetCities.findIndex(c => c.name === cityName);
  if (index > -1) {
    targetCities.splice(index, 1);
    // 重新生成数据
    data = generateData(2, -5, 5);
    // 更新图表
    if (typeof myChart !== 'undefined') {
      myChart.setOption({
        series: [{
          data: data
        }, {
          data: targetCities.map(city => ({
            name: city.name,
            value: [city.lng, city.lat, city.heatValue]
          }))
        }]
      });
    }
    return true;
  }
  return false;
}

///////////////////////////////////////////////////////////////////////////
// perlin noise helper from https://github.com/josephg/noisejs
///////////////////////////////////////////////////////////////////////////
function getNoiseHelper() {
  class Grad {
    constructor(x, y, z) {
      this.x = x;
      this.y = y;
      this.z = z;
    }
    dot2(x, y) {
      return this.x * x + this.y * y;
    }
    dot3(x, y, z) {
      return this.x * x + this.y * y + this.z * z;
    }
  }
  const grad3 = [
    new Grad(1, 1, 0),
    new Grad(-1, 1, 0),
    new Grad(1, -1, 0),
    new Grad(-1, -1, 0),
    new Grad(1, 0, 1),
    new Grad(-1, 0, 1),
    new Grad(1, 0, -1),
    new Grad(-1, 0, -1),
    new Grad(0, 1, 1),
    new Grad(0, -1, 1),
    new Grad(0, 1, -1),
    new Grad(0, -1, -1)
  ];
  const p = [
    151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140,
    36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120,
    234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33,
    88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71,
    134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133,
    230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161,
    1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130,
    116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250,
    124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227,
    47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44,
    154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98,
    108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34,
    242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14,
    239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121,
    50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243,
    141, 128, 195, 78, 66, 215, 61, 156, 180
  ];
  // To remove the need for index wrapping, double the permutation table length
  let perm = new Array(512);
  let gradP = new Array(512);
  // This isn't a very good seeding function, but it works ok. It supports 2^16
  // different seed values. Write something better if you need more seeds.
  function seed(seed) {
    if (seed > 0 && seed < 1) {
      // Scale the seed out
      seed *= 65536;
    }
    seed = Math.floor(seed);
    if (seed < 256) {
      seed |= seed << 8;
    }
    for (let i = 0; i < 256; i++) {
      let v;
      if (i & 1) {
        v = p[i] ^ (seed & 255);
      } else {
        v = p[i] ^ ((seed >> 8) & 255);
      }
      perm[i] = perm[i + 256] = v;
      gradP[i] = gradP[i + 256] = grad3[v % 12];
    }
  }
  seed(0);
  // ##### Perlin noise stuff
  function fade(t) {
    return t * t * t * (t * (t * 6 - 15) + 10);
  }
  function lerp(a, b, t) {
    return (1 - t) * a + t * b;
  }
  // 2D Perlin Noise
  function perlin2(x, y) {
    // Find unit grid cell containing point
    let X = Math.floor(x),
      Y = Math.floor(y);
    // Get relative xy coordinates of point within that cell
    x = x - X;
    y = y - Y;
    // Wrap the integer cells at 255 (smaller integer period can be introduced here)
    X = X & 255;
    Y = Y & 255;
    // Calculate noise contributions from each of the four corners
    let n00 = gradP[X + perm[Y]].dot2(x, y);
    let n01 = gradP[X + perm[Y + 1]].dot2(x, y - 1);
    let n10 = gradP[X + 1 + perm[Y]].dot2(x - 1, y);
    let n11 = gradP[X + 1 + perm[Y + 1]].dot2(x - 1, y - 1);
    // Compute the fade curve value for x
    let u = fade(x);
    // Interpolate the four results
    return lerp(lerp(n00, n10, u), lerp(n01, n11, u), fade(y));
  }
  return {
    seed,
    perlin2
  };
}
option = {
  backgroundColor: '#fff',
  title: {
    text: 'Travel City Heatmap',
    left: 'center',
    textStyle: {
      color: '#333',
      fontSize: 20
    }
  },
  tooltip: {
    formatter: function(params) {
      // 根据坐标找到对应的城市名称和设定热力值
      let cityName = 'Unknown Location';
      let setHeatValue = 0;
      targetCities.forEach(city => {
        if (Math.abs(city.lng - params.data[0]) < 0.1 && Math.abs(city.lat - params.data[1]) < 0.1) {
          cityName = city.name;
          setHeatValue = city.heatValue;
        }
      });
      return '城市: ' + cityName + '<br/>经度: ' + params.data[0].toFixed(4) + '<br/>纬度: ' + params.data[1].toFixed(4) + '<br/>设定热力值: ' + setHeatValue.toFixed(3) + '<br/>显示热力值: ' + params.data[2].toFixed(3);
    }
  },
  visualMap: {
    min: 0,
    max: 1,
    calculable: true,
    realtime: false,
    inRange: {
      color: [
        '#313695',
        '#4575b4',
        '#74add1',
        '#abd9e9',
        '#e0f3f8',
        '#ffffbf',
        '#fee090',
        '#fdae61',
        '#f46d43',
        '#d73027',
        '#a50026'
      ]
    }
  },
  geo: {
    map: 'world',
    roam: true,
    label: {
      show: false,
      emphasis: {
        show: false
      }
    },
    silent: true,
    itemStyle: {
      normal: {
        areaColor: '#f0f0f0',
        borderColor: '#999'
      },
      emphasis: {
        areaColor: '#e0e0e0'
      }
    }
  },
  series: [
    {
      name: 'Heatmap',
      type: 'heatmap',
      coordinateSystem: 'geo',
      data: data,
      emphasis: {
        itemStyle: {
          borderColor: '#333',
          borderWidth: 1
        }
      },
      progressive: 1000,
      animation: false,
      itemStyle: {
        borderColor: 'rgba(255,255,255,0.1)',
        borderWidth: 1
      }
    },
    {
      name: 'City Labels',
      type: 'scatter',
      coordinateSystem: 'geo',
      data: targetCities.map(city => ({
        name: city.name,
        value: [city.lng, city.lat, city.heatValue]
      })),
      symbolSize: 0, // 不显示散点，只显示标签
      label: {
        show: true,
        position: 'right',
        formatter: '{b}',
        fontSize: 10,
        color: '#333',
        backgroundColor: 'rgba(255,255,255,0.8)',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 3,
        padding: [2, 4, 2, 4],
        distance: 5
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 12,
          color: '#000',
          backgroundColor: 'rgba(255,255,255,0.9)',
          borderColor: '#999',
          borderWidth: 1
        }
      },
      silent: false
    }
  ]
};