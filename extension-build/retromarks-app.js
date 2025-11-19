// --- Translations ---
const TRANSLATIONS = {
    en: { app_title: "RetroMarks", search_placeholder: "Search bookmarks...", menu_add_bookmark: "Add new bookmark", menu_add_folder: "Add new folder", menu_sort_name: "Sort by name (View)", menu_toggle_date: "Show/Hide Date Column", menu_language: "Change Language", menu_visit_site: "Visit extension website", col_name: "Name", col_url: "URL", col_date: "Date", ctx_edit: "Edit", ctx_delete: "Delete", sort_asc: "Sort by ascending", sort_desc: "Sort by descending", sort_newest: "Sort by newest", sort_oldest: "Sort by oldest", hide_column: "Hide column", label_name: "Name:", label_url: "URL:", btn_cancel: "Cancel", btn_save: "Save", btn_confirm: "Yes, Delete", confirm_title: "Confirm Action", confirm_msg_item: "Are you sure you want to delete \"{title}\"?", confirm_msg_folder: "Are you sure you want to delete folder \"{title}\" and all its contents?" },
    it: { app_title: "RetroMarks", search_placeholder: "Cerca segnalibri...", menu_add_bookmark: "Aggiungi segnalibro", menu_add_folder: "Aggiungi cartella", menu_sort_name: "Ordina per nome", menu_toggle_date: "Mostra/Nascondi Data", menu_language: "Cambia lingua", menu_visit_site: "Visita sito estensione", col_name: "Nome", col_url: "URL", col_date: "Data", ctx_edit: "Modifica", ctx_delete: "Elimina", sort_asc: "Ascendente", sort_desc: "Discendente", sort_newest: "Più recenti", sort_oldest: "Più vecchi", hide_column: "Nascondi colonna", label_name: "Nome:", label_url: "URL:", btn_cancel: "Annulla", btn_save: "Salva", btn_confirm: "Sì, Elimina", confirm_title: "Conferma", confirm_msg_item: "Eliminare \"{title}\"?", confirm_msg_folder: "Eliminare cartella \"{title}\" e contenuto?" },
    es: { app_title: "RetroMarks", search_placeholder: "Buscar marcadores...", menu_add_bookmark: "Nuevo marcador", menu_add_folder: "Nueva carpeta", menu_sort_name: "Ordenar por nombre", menu_toggle_date: "Mostrar/Ocultar Fecha", menu_language: "Cambiar idioma", menu_visit_site: "Visitar sitio web", col_name: "Nombre", col_url: "URL", col_date: "Fecha", ctx_edit: "Editar", ctx_delete: "Eliminar", sort_asc: "Ascendente", sort_desc: "Descendente", sort_newest: "Más recientes", sort_oldest: "Más antiguos", hide_column: "Ocultar columna", label_name: "Nombre:", label_url: "URL:", btn_cancel: "Cancelar", btn_save: "Guardar", btn_confirm: "Sí, Eliminar", confirm_title: "Confirmar", confirm_msg_item: "¿Eliminar \"{title}\"?", confirm_msg_folder: "¿Eliminar carpeta \"{title}\" y todo su contenido?" },
    cy: { app_title: "RetroMarks", search_placeholder: "Chwilio...", menu_add_bookmark: "Ychwanegu nod tudalen", menu_add_folder: "Ychwanegu ffolder", menu_sort_name: "Trefnu yn ôl enw", menu_toggle_date: "Dangos/Cuddio Dyddiad", menu_language: "Newid iaith", menu_visit_site: "Ymweld â gwefan", col_name: "Enw", col_url: "URL", col_date: "Dyddiad", ctx_edit: "Golygu", ctx_delete: "Dileu", sort_asc: "Esgynnol", sort_desc: "Disgynnol", sort_newest: "Diweddaraf", sort_oldest: "Hynaf", hide_column: "Cuddio colofn", label_name: "Enw:", label_url: "URL:", btn_cancel: "Canslo", btn_save: "Cadw", btn_confirm: "Ie, Dileu", confirm_title: "Cadarnhau", confirm_msg_item: "Dileu \"{title}\"?", confirm_msg_folder: "Dileu ffolder \"{title}\"?" },
    gd: { app_title: "RetroMarks", search_placeholder: "Lorg...", menu_add_bookmark: "Cuir comharra-leabhair ris", menu_add_folder: "Cuir pasgan ris", menu_sort_name: "Seòrsaich a-rèir ainm", menu_toggle_date: "Seall/Falaich Ceann-latha", menu_language: "Atharraich cànan", menu_visit_site: "Tadhail air làrach-lìn", col_name: "Ainm", col_url: "URL", col_date: "Ceann-latha", ctx_edit: "Deasaich", ctx_delete: "Sguab às", sort_asc: "A -> U", sort_desc: "U -> A", sort_newest: "As ùire", sort_oldest: "As sine", hide_column: "Falaich colbh", label_name: "Ainm:", label_url: "URL:", btn_cancel: "Sguir dheth", btn_save: "Sàbhail", btn_confirm: "Sguab às", confirm_title: "Dearbhaich", confirm_msg_item: "Sguab às \"{title}\"?", confirm_msg_folder: "Sguab às pasgan \"{title}\"?" },
    ga: { app_title: "RetroMarks", search_placeholder: "Cuardaigh...", menu_add_bookmark: "Cuir leabharmharc nua leis", menu_add_folder: "Cuir fillteán nua leis", menu_sort_name: "Sórtáil de réir ainm", menu_toggle_date: "Taispeáin/Folaigh Dáta", menu_language: "Athraigh teanga", menu_visit_site: "Tabhair cuairt ar an suíomh", col_name: "Ainm", col_url: "URL", col_date: "Dáta", ctx_edit: "Eagar", ctx_delete: "Scrios", sort_asc: "Ardaitheach", sort_desc: "Ísitheach", sort_newest: "Is nuaí", sort_oldest: "Is sine", hide_column: "Folaigh", label_name: "Ainm:", label_url: "URL:", btn_cancel: "Cealaigh", btn_save: "Sábháil", btn_confirm: "Scrios", confirm_title: "Deimhnigh", confirm_msg_item: "Scrios \"{title}\"?", confirm_msg_folder: "Scrios fillteán \"{title}\"?" },
    "zh-CN": { app_title: "RetroMarks", search_placeholder: "搜索书签...", menu_add_bookmark: "添加新书签", menu_add_folder: "添加新文件夹", menu_sort_name: "按名称排序", menu_toggle_date: "显示/隐藏日期", menu_language: "更改语言", menu_visit_site: "访问网站", col_name: "名称", col_url: "网址", col_date: "日期", ctx_edit: "编辑", ctx_delete: "删除", sort_asc: "升序", sort_desc: "降序", sort_newest: "最新", sort_oldest: "最旧", hide_column: "隐藏列", label_name: "名称：", label_url: "网址：", btn_cancel: "取消", btn_save: "保存", btn_confirm: "删除", confirm_title: "确认操作", confirm_msg_item: "删除 “{title}”？", confirm_msg_folder: "删除文件夹 “{title}” 及其内容？" },
    "zh-TW": { app_title: "RetroMarks", search_placeholder: "搜尋書籤...", menu_add_bookmark: "新增書籤", menu_add_folder: "新增資料夾", menu_sort_name: "按名稱排序", menu_toggle_date: "顯示/隱藏日期", menu_language: "更換語言", menu_visit_site: "訪問網站", col_name: "名稱", col_url: "網址", col_date: "日期", ctx_edit: "編輯", ctx_delete: "刪除", sort_asc: "升序", sort_desc: "降序", sort_newest: "最新", sort_oldest: "最舊", hide_column: "隱藏列", label_name: "名稱：", label_url: "網址：", btn_cancel: "取消", btn_save: "儲存", btn_confirm: "刪除", confirm_title: "確認操作", confirm_msg_item: "刪除「{title}」？", confirm_msg_folder: "刪除資料夾「{title}」及其內容？" },
    hi: { app_title: "RetroMarks", search_placeholder: "बुकमार्क खोजें...", menu_add_bookmark: "नया बुकमार्क जोड़ें", menu_add_folder: "नया फ़ोल्डर जोड़ें", menu_sort_name: "नाम के अनुसार क्रमबद्ध करें", menu_toggle_date: "दिनांक दिखाएं/छिपाएं", menu_language: "भाषा बदलें", menu_visit_site: "वेबसाइट पर जाएं", col_name: "नाम", col_url: "URL", col_date: "दिनांक", ctx_edit: "संपादित करें", ctx_delete: "हटाएं", sort_asc: "आरोही", sort_desc: "अवरोही", sort_newest: "नवीनतम", sort_oldest: "पुराना", hide_column: "छिपाएं", label_name: "नाम:", label_url: "URL:", btn_cancel: "रद्द करें", btn_save: "सहेजें", btn_confirm: "हाँ, हटाएं", confirm_title: "पुष्टि करें", confirm_msg_item: "क्या आप \"{title}\" हटाना चाहते हैं?", confirm_msg_folder: "क्या आप फ़ोल्डर \"{title}\" हटाना चाहते हैं?" },
    vi: { app_title: "RetroMarks", search_placeholder: "Tìm kiếm dấu trang...", menu_add_bookmark: "Thêm dấu trang mới", menu_add_folder: "Thêm thư mục mới", menu_sort_name: "Sắp xếp theo tên", menu_toggle_date: "Hiện/Ẩn Ngày", menu_language: "Đổi ngôn ngữ", menu_visit_site: "Truy cập trang web", col_name: "Tên", col_url: "URL", col_date: "Ngày", ctx_edit: "Chỉnh sửa", ctx_delete: "Xóa", sort_asc: "Tăng dần", sort_desc: "Giảm dần", sort_newest: "Mới nhất", sort_oldest: "Cũ nhất", hide_column: "Ẩn cột", label_name: "Tên:", label_url: "URL:", btn_cancel: "Hủy", btn_save: "Lưu", btn_confirm: "Xóa", confirm_title: "Xác nhận", confirm_msg_item: "Xóa \"{title}\"?", confirm_msg_folder: "Xóa thư mục \"{title}\"?" },
    th: { app_title: "RetroMarks", search_placeholder: "ค้นหาบุ๊กมาร์ก...", menu_add_bookmark: "เพิ่มบุ๊กมาร์กใหม่", menu_add_folder: "เพิ่มโฟลเดอร์ใหม่", menu_sort_name: "เรียงตามชื่อ", menu_toggle_date: "แสดง/ซ่อน วันที่", menu_language: "เปลี่ยนภาษา", menu_visit_site: "เยี่ยมชมเว็บไซต์", col_name: "ชื่อ", col_url: "URL", col_date: "วันที่", ctx_edit: "แก้ไข", ctx_delete: "ลบ", sort_asc: "จากน้อยไปมาก", sort_desc: "จากมากไปน้อย", sort_newest: "ใหม่ที่สุด", sort_oldest: "เก่าที่สุด", hide_column: "ซ่อนคอลัมน์", label_name: "ชื่อ:", label_url: "URL:", btn_cancel: "ยกเลิก", btn_save: "บันทึก", btn_confirm: "ใช่, ลบ", confirm_title: "ยืนยัน", confirm_msg_item: "ลบ \"{title}\" หรือไม่?", confirm_msg_folder: "ลบโฟลเดอร์ \"{title}\" หรือไม่?" },
    ja: { app_title: "RetroMarks", search_placeholder: "ブックマークを検索...", menu_add_bookmark: "新しいブックマーク", menu_add_folder: "新しいフォルダ", menu_sort_name: "名前で並べ替え", menu_toggle_date: "日付の表示/非表示", menu_language: "言語を変更", menu_visit_site: "サイトへ移動", col_name: "名前", col_url: "URL", col_date: "日付", ctx_edit: "編集", ctx_delete: "削除", sort_asc: "昇順", sort_desc: "降順", sort_newest: "新しい順", sort_oldest: "古い順", hide_column: "列を隠す", label_name: "名前:", label_url: "URL:", btn_cancel: "キャンセル", btn_save: "保存", btn_confirm: "削除", confirm_title: "確認", confirm_msg_item: "「{title}」を削除しますか？", confirm_msg_folder: "フォルダ「{title}」を削除しますか？" },
    la: { app_title: "RetroMarks", search_placeholder: "Quaerere...", menu_add_bookmark: "Addere notam", menu_add_folder: "Addere plicam", menu_sort_name: "Ordinare per nomen", menu_toggle_date: "Ostendere/Celare Datum", menu_language: "Mutare linguam", menu_visit_site: "Visere situm", col_name: "Nomen", col_url: "URL", col_date: "Datum", ctx_edit: "Recensere", ctx_delete: "Delere", sort_asc: "Ascendens", sort_desc: "Descendens", sort_newest: "Novissimum", sort_oldest: "Vetustissimum", hide_column: "Celare columnam", label_name: "Nomen:", label_url: "URL:", btn_cancel: "Abrogare", btn_save: "Servare", btn_confirm: "Ita, Delere", confirm_title: "Confirmare", confirm_msg_item: "Delere \"{title}\"?", confirm_msg_folder: "Delere plicam \"{title}\"?" },
    sa: { app_title: "RetroMarks", search_placeholder: "अन्वेषणम्...", menu_add_bookmark: "नूतन पत्त्रचिन्हम्", menu_add_folder: "नूतन सम्पुटः", menu_sort_name: "नाम्ना क्रमेण", menu_toggle_date: "दिनाङ्कः दर्शय/गोपय", menu_language: "भाषां परिवर्तयतु", menu_visit_site: "जालस्थानं पश्यतु", col_name: "नाम", col_url: "URL", col_date: "दिनाङ्कः", ctx_edit: "सम्पादयतु", ctx_delete: "अपहरतु", sort_asc: "आरोह क्रमेण", sort_desc: "अवरोह क्रमेण", sort_newest: "नूतनतमम्", sort_oldest: "पुरातनतमम्", hide_column: "स्तम्भं गोपयतु", label_name: "नाम:", label_url: "URL:", btn_cancel: "निरस्तयतु", btn_save: "रक्षतु", btn_confirm: "आम्, अपहरतु", confirm_title: "पुष्टीकुरुत", confirm_msg_item: "किं भवान् \"{title}\" अपहर्तुम् इच्छति?", confirm_msg_folder: "किं भवान् सम्पुटं \"{title}\" अपहर्तुम् इच्छति?" },
    ta: { app_title: "ரெட்ரோமார்க்ஸ்", search_placeholder: "தேடுக...", menu_add_bookmark: "புதிய புத்தகக்குறி", menu_add_folder: "புதிய கோப்புறை", menu_sort_name: "பெயரால் வரிசைப்படுத்து", menu_toggle_date: "தேதியைக் காட்டு/மறை", menu_language: "மொழியை மாற்றவும்", menu_visit_site: "வலைத்தளத்தைப் பார்வையிடவும்", col_name: "பெயர்", col_url: "URL", col_date: "தேதி", ctx_edit: "திருத்து", ctx_delete: "அழி", sort_asc: "ஏறுவரிசை", sort_desc: "இறங்குவரிசை", sort_newest: "புதியது", sort_oldest: "பழையது", hide_column: "நெடுவரிசையை மறை", label_name: "பெயர்:", label_url: "URL:", btn_cancel: "ரத்துசெய்", btn_save: "சேமி", btn_confirm: "ஆம், அழி", confirm_title: "உறுதிப்படுத்தவும்", confirm_msg_item: "\"{title}\" ஐ அழிக்க வேண்டுமா?", confirm_msg_folder: "\"{title}\" கோப்புறை மற்றும் உள்ளடக்கங்களை அழிக்க வேண்டுமா?" },
    bn: { app_title: "RetroMarks", search_placeholder: "বুকমার্ক খুঁজুন...", menu_add_bookmark: "নতুন বুকমার্ক", menu_add_folder: "নতুন ফোল্ডার", menu_sort_name: "নামে সাজান", menu_toggle_date: "তারিখ দেখান/লুকান", menu_language: "ভাষা পরিবর্তন করুন", menu_visit_site: "ওয়েবসাইট দেখুন", col_name: "নাম", col_url: "URL", col_date: "তারিখ", ctx_edit: "সম্পাদনা", ctx_delete: "মুছুন", sort_asc: "আরোহী", sort_desc: "অবরোহী", sort_newest: "সর্বশেষ", sort_oldest: "প্রাচীনতম", hide_column: "কলাম লুকান", label_name: "নাম:", label_url: "URL:", btn_cancel: "বাতিল", btn_save: "সংরক্ষণ", btn_confirm: "হ্যাঁ, মুছুন", confirm_title: "নিশ্চিত করুন", confirm_msg_item: "আপনি কি \"{title}\" মুছে ফেলতে চান?", confirm_msg_folder: "আপনি কি ফোল্ডার \"{title}\" এবং এর সমস্ত বিষয়বস্তু মুছতে চান?" },
    ne: { app_title: "RetroMarks", search_placeholder: "बुकमार्क खोज्नुहोस्...", menu_add_bookmark: "नयाँ बुकमार्क थप्नुहोस्", menu_add_folder: "नयाँ फोल्डर थप्नुहोस्", menu_sort_name: "नाम अनुसार क्रमबद्ध गर्नुहोस्", menu_toggle_date: "मिति देखाउनुहोस्/लुकाउनुहोस्", menu_language: "भाषा परिवर्तन गर्नुहोस्", menu_visit_site: "वेबसाइटमा जानुहोस्", col_name: "नाम", col_url: "URL", col_date: "मिति", ctx_edit: "सम्पादन गर्नुहोस्", ctx_delete: "हटाउनुहोस्", sort_asc: "आरोही क्रम", sort_desc: "अवरोही क्रम", sort_newest: "नयाँ", sort_oldest: "पुरानो", hide_column: "स्तम्भ लुकाउनुहोस्", label_name: "नाम:", label_url: "URL:", btn_cancel: "रद्द गर्नुहोस्", btn_save: "बचत गर्नुहोस्", btn_confirm: "हो, हटाउनुहोस्", confirm_title: "पुष्टि गर्नुहोस्", confirm_msg_item: "के तपाईं \"{title}\" मेटाउन चाहनुहुन्छ?", confirm_msg_folder: "के तपाईं फोल्डर \"{title}\" र यसका सामग्रीहरू मेटाउन चाहनुहुन्छ?" }
};

const state = {
    bookmarks: {}, currentFolderId: '1', expandedFolders: new Set(['0', '1']), 
    selectedRows: new Set(), searchQuery: '', contextMenuTargetId: null,
    headerContextMenuTarget: null, modalMode: 'edit', sortState: { col: null, order: 'asc' },
    hideDate: false, language: 'en'
};

const ICONS = {
    folder: `<svg viewBox="0 0 24 24" width="18" height="18" class="folder-icon" fill="currentColor" aria-hidden="true"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/></svg>`,
    arrowRight: `<svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" style="opacity:0.7" aria-hidden="true"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>`,
    arrowDown: `<svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" style="opacity:0.7" aria-hidden="true"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>`,
    globe: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`
};

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLanguage();
    loadBookmarks();
    setupEventListeners();
    setupContextMenu();
    setupMainMenu();
    makeTableResizable(); 
    setupSorting();
    setupModals();
    
    // Sidebar Specific: Add button
    const sbAdd = document.getElementById('sidebar-add');
    if(sbAdd) sbAdd.addEventListener('click', () => openModal('add-bookmark'));
});

// --- Notification & Utils ---
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => { toast.style.opacity = '0'; setTimeout(() => toast.remove(), 300); }, 3000);
}

function t(key) {
    const lang = state.language || 'en';
    const dict = TRANSLATIONS[lang] || TRANSLATIONS['en'];
    return dict[key] || key;
}

// --- Language Logic ---
function initLanguage() {
    const saved = localStorage.getItem('retromarks-lang');
    state.language = (saved && TRANSLATIONS[saved]) ? saved : 'en';
    applyLanguage();
}

function applyLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (key) el.textContent = t(key);
    });
    const search = document.getElementById('search');
    if(search) search.placeholder = t('search_placeholder');
}

function setLanguage(lang) {
    state.language = lang;
    localStorage.setItem('retromarks-lang', lang);
    applyLanguage();
    const modal = document.getElementById('language-modal');
    if(modal) modal.close();
    showToast('Language updated');
}

// --- Theme ---
function initTheme() {
    const savedTheme = localStorage.getItem('retromarks-theme');
    if (savedTheme) document.documentElement.setAttribute('data-theme', savedTheme);
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) document.documentElement.setAttribute('data-theme', 'dark');
    
    const toggle = document.getElementById('theme-toggle');
    if(toggle) toggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('retromarks-theme', next);
    });
}

// --- Sorting ---
function setupSorting() {
    document.querySelectorAll('th.sortable').forEach(th => {
        th.addEventListener('click', () => {
            const col = th.getAttribute('data-col');
            if (state.sortState.col !== col) state.sortState = { col: col, order: 'asc' };
            else if (state.sortState.order === 'asc') state.sortState.order = 'desc';
            else state.sortState = { col: null, order: 'asc' };
            renderTable();
        });
        th.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            state.headerContextMenuTarget = th.getAttribute('data-col');
            const type = state.headerContextMenuTarget === 'date' ? 'header-date' : 'header-text';
            showContextMenu(e.clientX, e.clientY, type);
        });
    });
}

// --- Menus ---
function setupMainMenu() {
    const menuBtn = document.getElementById('menu-btn');
    const menu = document.getElementById('main-menu');
    if(!menuBtn || !menu) return; 

    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
        menuBtn.setAttribute('aria-expanded', !isExpanded);
        menu.classList.toggle('hidden');
    });
    document.addEventListener('click', () => {
        menu.classList.add('hidden');
        menuBtn.setAttribute('aria-expanded', 'false');
        document.getElementById('context-menu').classList.add('hidden');
    });

    const bind = (id, fn) => { const el = document.getElementById(id); if(el) el.addEventListener('click', fn); };
    
    bind('action-add-bookmark', () => openModal('add-bookmark'));
    bind('action-add-folder', () => openModal('add-folder'));
    bind('action-visit-site', () => chrome.tabs.create({ url: 'https://chrome.google.com/webstore' }));
    bind('action-toggle-date', () => {
        state.hideDate = !state.hideDate;
        renderTable();
        showToast(state.hideDate ? t('hide_column') : 'Date column visible');
    });
    
    bind('action-language', () => {
        const modal = document.getElementById('language-modal');
        const grid = document.getElementById('language-grid');
        grid.innerHTML = ''; 
        Object.keys(TRANSLATIONS).forEach(langCode => {
            const btn = document.createElement('button');
            btn.className = 'btn';
            btn.textContent = langCode.toUpperCase();
            btn.onclick = () => setLanguage(langCode);
            grid.appendChild(btn);
        });
        modal.showModal();
    });
    bind('btn-lang-close', () => document.getElementById('language-modal').close());
}

// --- Listeners ---
function setupEventListeners() {
    const search = document.getElementById('search');
    if(search) search.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        renderTable(); 
        if(document.body.classList.contains('mode-sidebar')) renderTree();
    });

    if (chrome.bookmarks) {
        const refresh = () => loadBookmarks();
        chrome.bookmarks.onCreated.addListener(refresh);
        chrome.bookmarks.onRemoved.addListener(refresh);
        chrome.bookmarks.onChanged.addListener(refresh);
        chrome.bookmarks.onMoved.addListener(refresh);
    }

    const contentArea = document.getElementById('content');
    const sidebarArea = document.getElementById('sidebar');
    
    // Global context menu handler (Table/Main View)
    if(contentArea) contentArea.addEventListener('contextmenu', (e) => {
        if (e.target === contentArea || e.target.closest('table')) {
            if (!e.target.closest('tr')) { 
                e.preventDefault();
                showContextMenu(e.clientX, e.clientY, 'global');
            }
        }
    });

    // Global context menu handler (Sidebar View)
    if(sidebarArea) sidebarArea.addEventListener('contextmenu', (e) => {
        // Only trigger if NOT clicking a tree item
        if (e.target === sidebarArea || e.target.id === 'sidebar') {
            e.preventDefault();
            showContextMenu(e.clientX, e.clientY, 'global');
        }
    });
}

function makeTableResizable() {
    const headers = document.querySelectorAll('th');
    headers.forEach(th => {
        if(th.classList.contains('col-icon')) return;
        const resizer = document.createElement('div');
        resizer.classList.add('resizer');
        th.appendChild(resizer);
        let startX, startWidth;
        resizer.addEventListener('mousedown', (e) => {
            e.preventDefault(); e.stopPropagation();
            startX = e.pageX; startWidth = th.offsetWidth; resizer.classList.add('resizing');
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        });
        function onMouseMove(e) {
            const width = startWidth + (e.pageX - startX);
            if (width > 50) th.style.width = `${width}px`;
        }
        function onMouseUp() {
            resizer.classList.remove('resizing');
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }
    });
}

// --- Modals & Custom Confirm ---
function openModal(mode, itemId = null) {
    state.modalMode = mode;
    state.contextMenuTargetId = itemId; 
    const modal = document.getElementById('edit-modal');
    const title = document.getElementById('modal-title');
    const nameInput = document.getElementById('edit-name');
    const urlInput = document.getElementById('edit-url');
    const urlGroup = document.getElementById('url-group');

    nameInput.value = ''; urlInput.value = ''; urlGroup.style.display = 'block';

    if (mode === 'edit' && itemId) {
        const item = state.bookmarks[itemId];
        title.textContent = t('ctx_edit');
        nameInput.value = item.title;
        if (item.type === 'folder') urlGroup.style.display = 'none';
        else urlInput.value = item.url;
    } else if (mode === 'add-bookmark') {
        title.textContent = t('menu_add_bookmark');
        urlInput.value = 'https://';
    } else if (mode === 'add-folder') {
        title.textContent = t('menu_add_folder');
        urlGroup.style.display = 'none';
    }
    modal.showModal();
}

function confirmAction(title) {
    return new Promise((resolve) => {
        const modal = document.getElementById('confirm-modal');
        const msg = document.getElementById('confirm-message');
        const btnYes = document.getElementById('btn-confirm-yes');
        const btnNo = document.getElementById('btn-confirm-cancel');
        msg.textContent = title;
        modal.showModal();
        const cleanup = () => { btnYes.removeEventListener('click', onYes); btnNo.removeEventListener('click', onNo); modal.close(); };
        const onYes = () => { cleanup(); resolve(true); };
        const onNo = () => { cleanup(); resolve(false); };
        btnYes.addEventListener('click', onYes); btnNo.addEventListener('click', onNo);
    });
}

function setupModals() {
    const editModal = document.getElementById('edit-modal');
    const btnCancel = document.getElementById('btn-cancel');
    if(btnCancel) btnCancel.addEventListener('click', () => {
        editModal.close(); 
    });

    const modalForm = document.getElementById('modal-form');
    if(modalForm) modalForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('edit-name').value.trim();
        let url = document.getElementById('edit-url').value.trim();
        
        if (!name) return showToast(t('label_name') + ' required', 'error');
        
        if (state.modalMode !== 'add-folder' && state.modalMode !== 'edit-folder') {
             const item = state.bookmarks[state.contextMenuTargetId];
             if (state.modalMode === 'add-bookmark' || (state.modalMode === 'edit' && item?.type !== 'folder')) {
                  if (!url) return showToast(t('label_url') + ' required', 'error');
                  if (!/^https?:\/\//i.test(url)) url = 'https://' + url;
             }
        }

        const cb = () => { 
            if (chrome.runtime.lastError) showToast(chrome.runtime.lastError.message, 'error');
            else { showToast(t('btn_save'), 'success'); editModal.close(); }
        };
        if (state.modalMode === 'edit') {
            const chg = { title: name };
            if (state.bookmarks[state.contextMenuTargetId].type !== 'folder') chg.url = url;
            chrome.bookmarks.update(state.contextMenuTargetId, chg, cb);
        } else if (state.modalMode === 'add-bookmark') {
            chrome.bookmarks.create({ parentId: state.currentFolderId, title: name, url: url }, cb);
        } else if (state.modalMode === 'add-folder') {
            chrome.bookmarks.create({ parentId: state.currentFolderId, title: name }, cb);
        }
    });
}

function setupContextMenu() {
    const bind = (id, fn) => { const el = document.getElementById(id); if(el) el.onclick = fn; };
    bind('menu-edit', () => { openModal('edit', state.contextMenuTargetId); document.getElementById('context-menu').classList.add('hidden'); });
    bind('menu-delete', async () => {
        const id = state.contextMenuTargetId;
        const item = state.bookmarks[id];
        document.getElementById('context-menu').classList.add('hidden');
        const msg = item.type === 'folder' ? t('confirm_msg_folder').replace('{title}', item.title) : t('confirm_msg_item').replace('{title}', item.title);
        if (await confirmAction(msg)) {
            if (item.type === 'folder') chrome.bookmarks.removeTree(id); else chrome.bookmarks.remove(id);
        }
    });
    bind('menu-ctx-add-bookmark', () => { openModal('add-bookmark'); document.getElementById('context-menu').classList.add('hidden'); });
    bind('menu-ctx-add-folder', () => { openModal('add-folder'); document.getElementById('context-menu').classList.add('hidden'); });
    
    const setSort = (order) => {
        state.sortState = { col: state.headerContextMenuTarget, order: order };
        renderTable(); document.getElementById('context-menu').classList.add('hidden');
    };
    bind('menu-sort-asc', () => setSort('asc')); bind('menu-sort-desc', () => setSort('desc'));
    bind('menu-sort-newest', () => setSort('desc')); bind('menu-sort-oldest', () => setSort('asc'));
    bind('menu-hide-date', () => {
        state.hideDate = true; renderTable(); document.getElementById('context-menu').classList.add('hidden'); showToast(t('hide_column') + ' OK');
    });
}

// --- Core Data ---
function loadBookmarks() {
    if (!chrome.bookmarks) return;
    chrome.bookmarks.getTree((tree) => {
        const flatMap = {};
        const traverse = (node, parentId) => {
            const item = {
                id: node.id, parentId: parentId, title: node.title,
                url: node.url, type: node.url ? 'link' : 'folder',
                date: node.dateAdded ? new Date(node.dateAdded).toLocaleDateString() : '',
                children: node.children ? node.children.map(c => c.id) : []
            };
            flatMap[node.id] = item;
            if (node.children) node.children.forEach(c => traverse(c, node.id));
        };
        traverse(tree[0], null);
        state.bookmarks = flatMap;
        renderTree(); renderTable();
    });
}

function renderTree() {
    const container = document.getElementById('sidebar');
    if(!container) return;
    container.innerHTML = '';
    const root = state.bookmarks['0'];
    if (root && root.children) root.children.forEach(childId => container.appendChild(createTreeNode(childId, 0)));
}

function createTreeNode(id, level) {
    const item = state.bookmarks[id];
    const isSidebar = document.body.classList.contains('mode-sidebar');
    
    if (!isSidebar && item.type !== 'folder') return document.createTextNode('');
    if (!item) return document.createTextNode('');
    
    // Sidebar Search Filter
    if (isSidebar && state.searchQuery && !item.title.toLowerCase().includes(state.searchQuery.toLowerCase())) {
         if(item.type !== 'folder') return document.createTextNode('');
    }

    const wrapper = document.createElement('div');
    const row = document.createElement('div');
    let rowClasses = 'tree-item';
    if (state.currentFolderId === id && item.type === 'folder') rowClasses += ' selected';
    row.className = rowClasses;
    row.style.paddingLeft = `${level * 16 + 8}px`;
    row.draggable = true;

    row.onclick = () => {
        if (item.type === 'folder') {
            state.currentFolderId = id;
            if (!isSidebar) { state.searchQuery = ''; const sBox = document.getElementById('search'); if(sBox) sBox.value = ''; renderTable(); }
            if (state.expandedFolders.has(id)) state.expandedFolders.delete(id); else state.expandedFolders.add(id);
            renderTree(); 
        } else {
            chrome.tabs.create({ url: item.url });
        }
    };

    row.oncontextmenu = (e) => {
        e.preventDefault(); e.stopPropagation();
        state.contextMenuTargetId = id;
        showContextMenu(e.clientX, e.clientY, 'item');
    };
    
    row.ondragstart = (e) => { e.stopPropagation(); e.dataTransfer.setData('text/plain', id); };
    row.ondragover = (e) => { e.preventDefault(); e.stopPropagation(); row.classList.add('drag-over'); };
    row.ondragleave = () => row.classList.remove('drag-over');
    row.ondrop = (e) => handleDrop(e, id);

    const hasChildren = item.children && item.children.length > 0;
    const toggle = document.createElement('div');
    toggle.className = 'tree-toggle';
    
    if (item.type === 'folder' && hasChildren) {
        toggle.innerHTML = state.expandedFolders.has(id) ? ICONS.arrowDown : ICONS.arrowRight;
        toggle.onclick = (e) => { e.stopPropagation(); if(state.expandedFolders.has(id)) state.expandedFolders.delete(id); else state.expandedFolders.add(id); renderTree(); };
    }

    const icon = document.createElement('div');
    if (item.type === 'folder') {
        icon.innerHTML = ICONS.folder;
    } else {
         const img = document.createElement('img'); img.className = 'favicon'; 
         img.src = `_favicon/?pageUrl=${encodeURIComponent(item.url)}&size=16`;
         icon.appendChild(img);
    }

    const title = document.createElement('span');
    title.textContent = item.title;
    title.style.marginLeft = '8px'; title.style.overflow = 'hidden'; title.style.textOverflow = 'ellipsis';

    row.append(toggle, icon, title);
    wrapper.appendChild(row);

    if (item.type === 'folder' && state.expandedFolders.has(id) && item.children) {
        const childrenContainer = document.createElement('div');
        item.children.forEach(childId => {
            const childNode = createTreeNode(childId, level + 1);
            if(childNode) childrenContainer.appendChild(childNode);
        });
        wrapper.appendChild(childrenContainer);
    }
    return wrapper;
}

function renderTable() {
    const tbody = document.getElementById('table-body');
    if (!tbody) return;
    tbody.innerHTML = '';
    
    document.querySelectorAll('th.sortable').forEach(th => {
        const col = th.getAttribute('data-col');
        th.classList.remove('sorted-asc', 'sorted-desc', 'hidden-force');
        if (col === state.sortState.col) th.classList.add(state.sortState.order === 'asc' ? 'sorted-asc' : 'sorted-desc');
        if (col === 'date' && state.hideDate) th.classList.add('hidden-force');
    });

    let visibleIds = [];
    if (state.searchQuery) visibleIds = Object.values(state.bookmarks).filter(i => i.id !== '0' && i.title.toLowerCase().includes(state.searchQuery.toLowerCase())).map(i => i.id);
    else { const current = state.bookmarks[state.currentFolderId]; visibleIds = current ? [...current.children] : []; }

    if (state.sortState.col) {
        visibleIds.sort((a, b) => {
            const itemA = state.bookmarks[a]; const itemB = state.bookmarks[b];
            const valA = itemA[state.sortState.col] || ''; const valB = itemB[state.sortState.col] || '';
            if (itemA.type !== itemB.type) return itemA.type === 'folder' ? -1 : 1;
            return state.sortState.order === 'asc' ? valA.localeCompare(valB) : valB.localeCompare(valA);
        });
    }

    visibleIds.forEach(id => {
        const item = state.bookmarks[id]; if (!item) return;
        const tr = document.createElement('tr'); tr.draggable = true; tr.tabIndex = 0;
        if (state.selectedRows.has(id)) tr.className = 'selected';

        tr.onclick = (e) => {
            if (e.ctrlKey || e.metaKey) { state.selectedRows.has(id) ? state.selectedRows.delete(id) : state.selectedRows.add(id); } 
            else { state.selectedRows.clear(); state.selectedRows.add(id); }
            renderTable();
        };
        tr.ondblclick = () => { if (item.type === 'folder') { state.currentFolderId = id; state.searchQuery = ''; document.getElementById('search').value = ''; renderTree(); renderTable(); } else { window.open(item.url, '_blank'); } };
        tr.oncontextmenu = (e) => { e.preventDefault(); state.contextMenuTargetId = id; state.selectedRows.clear(); state.selectedRows.add(id); renderTable(); showContextMenu(e.clientX, e.clientY, 'item'); };
        tr.ondragstart = (e) => { e.dataTransfer.setData('text/plain', id); };
        if (item.type === 'folder') {
            tr.ondragover = (e) => { e.preventDefault(); tr.classList.add('drag-over'); };
            tr.ondragleave = () => tr.classList.remove('drag-over');
            tr.ondrop = (e) => handleDrop(e, id);
        }

        const tdIcon = document.createElement('td'); tdIcon.className = 'col-icon';
        if (item.type === 'folder') tdIcon.innerHTML = ICONS.folder;
        else {
            const img = document.createElement('img'); img.className = 'favicon'; img.src = `_favicon/?pageUrl=${encodeURIComponent(item.url)}&size=16`;
            img.onerror = () => { tdIcon.innerHTML = ICONS.globe; }; tdIcon.appendChild(img);
        }
        const tdName = document.createElement('td'); tdName.className = 'col-name'; tdName.textContent = item.title;
        const tdUrl = document.createElement('td'); tdUrl.className = 'col-url'; tdUrl.textContent = item.url || '';
        const tdDate = document.createElement('td'); tdDate.className = `col-date ${state.hideDate ? 'hidden-force' : ''}`; tdDate.textContent = item.date;
        tr.append(tdIcon, tdName, tdUrl, tdDate); tbody.appendChild(tr);
    });
}

function showContextMenu(x, y, type) {
    const menu = document.getElementById('context-menu');
    const groups = menu.querySelectorAll('.menu-group');
    groups.forEach(g => g.style.display = 'none');
    if (type === 'item') menu.querySelector('.group-item').style.display = 'block';
    else if (type === 'global') menu.querySelector('.group-global').style.display = 'block';
    else if (type === 'header-text') { const g = menu.querySelector('.group-header-text'); if(g) g.style.display = 'block'; }
    else if (type === 'header-date') { const g = menu.querySelector('.group-header-date'); if(g) g.style.display = 'block'; }
    menu.style.left = `${x}px`; menu.style.top = `${y}px`; menu.classList.remove('hidden');
}

function handleDrop(e, targetParentId) {
    e.preventDefault(); e.stopPropagation();
    const draggedId = e.dataTransfer.getData('text/plain');
    document.querySelectorAll('.drag-over').forEach(el => el.classList.remove('drag-over'));
    if (!draggedId || draggedId === targetParentId) return;
    chrome.bookmarks.move(draggedId, { parentId: targetParentId }, (res) => {
        if (chrome.runtime.lastError) showToast(chrome.runtime.lastError.message, 'error');
    });
}
