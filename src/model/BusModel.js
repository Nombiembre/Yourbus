import Bus from "../db/Bus.json";

export default class BusModel {
  static async createBusWithEmpresaAndIdEmpresa({ empresaID, empresa, ...input }) {
    const id = empresa + empresaID;
    const newBus = {
      id: id,
      ...input,
    };

    Bus.push(newBus);
    return JSON.parse(newBus);
  }
  static async getBusInfoById({ id }) {
    const bus = Bus.find((bus) => bus.id === id);
    return bus;
  }
  static async deleteBusById({ id }) {
    const index = Bus.findIndex((bus) => bus.id === id);
    Bus.splice(index, 1);
    return true;
  }
  static async modifyBusById({ id }) {
    const index = Bus.findIndex((bus) => bus.id === id);
    Bus.splice(index, 1);
    return true;
  }

  static async getAll() {
    return Bus;
  }
}
