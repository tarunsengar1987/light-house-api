module.exports = (sequelize, Sequelize) => {
    const MockData = sequelize.define("mock_data", {
      id: {type: Sequelize.INTEGER, primaryKey: true},
      timestamp: {
        type: Sequelize.DATE
      },
      client: {
        type: Sequelize.STRING
      },
      response200: {
        type: Sequelize.INTEGER
      },
      response400: {
        type: Sequelize.INTEGER
      },
      response500: {
        type: Sequelize.INTEGER
      }
    }, {
        timestamps: false,
    });
    return MockData;
  };