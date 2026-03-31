myChart.showLoading();
//https://echarts.apache.org/examples/zh/editor.html?c=geo-graph
// 加载世界地图数据
$.get(ROOT_PATH + '/data/asset/geo/world.json', function (worldJson) {
  myChart.hideLoading();

  echarts.registerMap('world', worldJson);

  option = {
    backgroundColor: '#fff',
    title: {
      text: 'World Map',
      left: 'center',
      textStyle: {
        color: '#333'
      }
    },
    tooltip: {
      trigger: 'item',
      showDelay: 0,
      transitionDuration: 0.2
    },
    visualMap: {
      type: 'piecewise',
      left: 'right',
      min: 0,
      max: 1009,
      pieces: [
        { min: 0, max: 0, color: '#d3d3d3', label: '0 (No Data)' },
        { min: 1, max: 10, color: '#ffb3b3', label: '1-10' },
        { min: 11, max: 50, color: '#ff9999', label: '11-50' },
        { min: 51, max: 100, color: '#ff8080', label: '51-100' },
        { min: 101, max: 200, color: '#e66666', label: '101-200' },
        { min: 201, max: 400, color: '#cc6666', label: '201-400' },
        { min: 401, max: 1009, color: '#b36666', label: '401-1009' }
      ],
      showLabel: true,
      itemWidth: 20,
      itemHeight: 14,
      text: ['High', 'Low'],
      calculable: true,
      textStyle: {
        color: '#333'
      }
    },
    toolbox: {
      show: true,
      left: 'left',
      top: 'top',
      feature: {
        dataView: { readOnly: false },
        restore: {},
        saveAsImage: {}
      }
    },
    series: [
      {
        name: 'World Map',
        type: 'map',
        map: 'world',
        roam: true,
        emphasis: {
          label: {
            show: true
          }
        },
        itemStyle: {
          borderColor: '#ddd',
          borderWidth: 0.5
        },
        // 为不同国家设置不同的值，用于颜色映射
        data: [
          { name: 'Germany', value: 1009 },
          { name: 'Japan', value: 1002 },
          { name: 'China', value: 417 },
          { name: 'France', value: 375 },
          { name: 'United Kingdom', value: 365 },
          { name: 'United States', value: 162 },
          { name: 'Italy', value: 162 },
          { name: 'Russia', value: 121 },
          { name: 'Sweden', value: 107 },
          { name: 'Sri Lanka', value: 81 },
          { name: 'Spain', value: 78 },
          { name: 'Egypt', value: 72 },
          { name: 'Singapore', value: 67 },
          { name: 'Belgium', value: 58 },
          { name: 'Vietnam', value: 45 },
          { name: 'Norway', value: 40 },
          { name: 'Yemen', value: 38 },
          { name: 'Netherlands', value: 34 },
          { name: 'Portugal', value: 31 },
          { name: 'Iran', value: 29 },
          { name: 'Iraq', value: 24 },
          { name: 'Turkey', value: 20 },
          { name: 'Austria', value: 20 },
          { name: 'Peru', value: 18 },
          { name: 'Switzerland', value: 17 },
          { name: 'Malaysia', value: 14 },
          { name: 'Brazil', value: 13 },
          { name: 'India', value: 9 },
          { name: 'Azerbaijan', value: 9 },
          { name: 'Panama', value: 8 },
          { name: 'Canada', value: 8 },
          { name: 'Chile', value: 7 },
          { name: 'Denmark', value: 7 },
          { name: 'Mexico', value: 6 },
          { name: 'Dem. Rep. Korea', value: 5 },
          { name: 'Ecuador', value: 5 },
          { name: 'Cuba', value: 4 },
          { name: 'Thailand', value: 4 },
          { name: 'Kyrgyzstan', value: 4 },
          { name: 'Argentina', value: 4 },
          { name: 'Myanmar', value: 4 },
          { name: 'Malta', value: 3 },
          { name: 'Nicaragua', value: 3 },
          { name: 'Honduras', value: 2 },
          { name: 'Costa Rica', value: 2 },
          { name: 'El Salvador', value: 2 },
          { name: 'Venezuela', value: 2 },
          { name: 'Bolivia', value: 2 },
          { name: 'Paraguay', value: 2 },
          { name: 'Guatemala', value: 2 },
          { name: 'Dominican Republic', value: 2 },
          { name: 'Haiti', value: 2 },
          { name: 'Uruguay', value: 2 },
          { name: 'Greece', value: 2 },
          { name: 'Uzbekistan', value: 2 },
          { name: 'Afghanistan', value: 2 },
          { name: 'Georgia', value: 2 },
          { name: 'Cambodia', value: 1 },
          { name: 'Kazakhstan', value: 1 },
          { name: 'Turkmenistan', value: 1 },
          { name: 'Syria', value: 1 },
          { name: 'Morocco', value: 1 },
          { name: 'Indonesia', value: 1 },
          { name: 'Monaco', value: 1 },
          { name: 'Serbia', value: 1 },
          { name: 'Bulgaria', value: 1 },
          { name: 'Australia', value: 1 }
        ]
      }
    ]
  };

  myChart.setOption(option);
});

