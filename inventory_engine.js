/**
 * 模块：库存与耗材关联引擎
 */
const InventoryEngine = {
    // 耗材数据库：款式 -> 需要消耗的材料比例
    dependency: {
        "手绘花卉": { baseMaterial: 0.15, charms: 2 }, // 消耗15%的一瓶胶，2颗钻
        "珍珠奶茶": { tea: 1, milk: 1, pearl: 1 }
    },

    calculateVariableCost(itemName) {
        // 基于会计原理：将采购总价分摊到单次服务中
        // 公式：采购价 / 预估使用次数
        const dep = this.dependency[itemName];
        // 逻辑逻辑处理...
        return (dep ? 5.5 : 2.0); // 暂定模拟回传
    }
};
