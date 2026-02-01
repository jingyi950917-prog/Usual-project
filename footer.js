(function injectFooter() {
    const footer = document.createElement('footer');
    footer.className = 'stellarock-footer';
    footer.innerHTML = `
        <div class="footer-brand">STELLAROCK TECH</div>
        <div>© 2026 辰石科技 | 赋能个体主理人</div>
        <div class="footer-version">System Version 1.0.4 • NudgeNow Project</div>
    `;
    
    // 如果页面有背景容器，可以挂载到容器里；否则挂载到 body
    document.body.appendChild(footer);
})();
