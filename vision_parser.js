const UniversalVision = {
    async parseAnyReceipt(rawText) {
        const amountPattern = /(实付|合计|总计|¥)\s*[:：]?\s*(\d+(\.\d+)?)/i;
        const qtyPattern = /(x|X|数量|件|张)\s*[:：]?\s*(\d+)/i;
        
        const amountMatch = rawText.match(amountPattern);
        const qtyMatch = rawText.match(qtyPattern);
        
        const total = amountMatch ? parseFloat(amountMatch[2]) : 0;
        const qty = qtyMatch ? parseInt(qtyMatch[2]) : 1;
        
        return {
            itemName: rawText.split('\n')[0].substring(0, 10),
            totalCost: total,
            quantity: qty,
            unitCost: total > 0 ? (total / qty).toFixed(4) : 0
        };
    }
};
;
