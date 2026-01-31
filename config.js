const IndustryAdapter = {
    registry: {
        "nail": { name: "美甲美睫", theme: "#ff85a2", icon: "💅", unit: "位顾客" },
        "food": { name: "小吃摆摊", theme: "#ffb347", icon: "🌭", unit: "份餐点" },
        "retail": { name: "服装零售", theme: "#4facfe", icon: "👗", unit: "件衣服" }
    },
    getCurrent() {
        const type = localStorage.getItem('industry_type') || 'nail';
        return this.registry[type];
    },
    setIndustry(type) {
        localStorage.setItem('industry_type', type);
    }
};
