import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  static: true,
  sequelize: {
    enable: true,
    package: 'egg-sequelize'
  },
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  validate: {
    enable: true,
    package: 'egg-validate',
  }
};

export default plugin;
