const DEFAULT_SHEET_URL =
  "https://docs.google.com/spreadsheets/d/1uTCNswbRn9W5KJUktoJMVyYsxnsyfdiDsUmRxJvMFmc/edit?gid=0#gid=0";
const PUBLIC_APP_URL = "https://asset-bipum-management.vercel.app/";

const HEADERS = [
  "자산번호(최종)",
  "자산구분코드",
  "사업장코드",
  "상세위치코드",
  "품목코드",
  "도입연월",
  "등록연도",
  "순번",
  "품명(실제명칭)",
  "관리부서",
  "상태",
  "현재사용자",
  "사용자소속",
  "사용시작일",
  "반납예정일",
  "사용목적",
  "제조사",
  "모델명",
  "시리얼번호",
  "구매일",
  "구매금액",
  "사진링크",
  "QR코드URL",
  "스티커크기",
  "스티커재질",
  "인쇄수량",
  "최종실사일",
  "최근상태변경일",
  "사용이력",
  "비고",
];

const DEFAULT_ROWS = [
  {
    "자산번호(최종)": "ADM-DESK-2605-001",
    "자산구분코드": "ADM",
    "사업장코드": "OS01",
    "상세위치코드": "ADM",
    "품목코드": "DESK",
    "도입연월": "2605",
    "등록연도": "26",
    "순번": "1",
    "품명(실제명칭)": "사무용 책상",
    "관리부서": "인사총무파트",
    "상태": "사용 중",
    "현재사용자": "총무 공용",
    "사용자소속": "인사총무파트",
    "사용시작일": "2026-05-01",
    "반납예정일": "",
    "사용목적": "사무실 상시 배치",
    "제조사": "-",
    "모델명": "-",
    "시리얼번호": "-",
    "구매일": "-",
    "구매금액": "-",
    "사진링크": "-",
    "QR코드URL": "https://asset-bipum-management.vercel.app/?asset=ADM-DESK-2605-001#assets",
    "스티커크기": "60x35",
    "스티커재질": "무광 PET",
    "인쇄수량": "1",
    "최종실사일": "",
    "최근상태변경일": "",
    "사용이력": "[]",
    "비고": "기존 보유품",
  },
  {
    "자산번호(최종)": "IT-NOTEBOOK-2601-004",
    "자산구분코드": "IT",
    "사업장코드": "OS03",
    "상세위치코드": "ADM",
    "품목코드": "NOTEBOOK",
    "도입연월": "2601",
    "등록연도": "26",
    "순번": "4",
    "품명(실제명칭)": "업무용 노트북",
    "관리부서": "재무회계파트",
    "상태": "사용 중",
    "현재사용자": "프로젝트 사용자",
    "사용자소속": "재무회계파트",
    "사용시작일": "2026-01-01",
    "반납예정일": "",
    "사용목적": "프로젝트 지급",
    "제조사": "삼성",
    "모델명": "갤럭시북",
    "시리얼번호": "SN123456",
    "구매일": "2026-01-01",
    "구매금액": "₩1,500,000",
    "사진링크": "-",
    "QR코드URL": "https://asset-bipum-management.vercel.app/?asset=IT-NOTEBOOK-2601-004#assets",
    "스티커크기": "50x30",
    "스티커재질": "VOID 라벨",
    "인쇄수량": "1",
    "최종실사일": "",
    "최근상태변경일": "",
    "사용이력": "[]",
    "비고": "프로젝트 지급품",
  },
  {
    "자산번호(최종)": "EQ-WELDER-2505-012",
    "자산구분코드": "EQ",
    "사업장코드": "FA02",
    "상세위치코드": "SHOPA",
    "품목코드": "WELDER",
    "도입연월": "2505",
    "등록연도": "25",
    "순번": "12",
    "품명(실제명칭)": "현장 용접기",
    "관리부서": "UNIT1파트",
    "상태": "수리 중",
    "현재사용자": "",
    "사용자소속": "",
    "사용시작일": "",
    "반납예정일": "",
    "사용목적": "",
    "제조사": "현대",
    "모델명": "WELD-500",
    "시리얼번호": "W-998822",
    "구매일": "2025-05-20",
    "구매금액": "₩3,500,000",
    "사진링크": "-",
    "QR코드URL": "https://asset-bipum-management.vercel.app/?asset=EQ-WELDER-2505-012#assets",
    "스티커크기": "80x50",
    "스티커재질": "파괴 라벨",
    "인쇄수량": "1",
    "최종실사일": "",
    "최근상태변경일": "",
    "사용이력": "[]",
    "비고": "수리 후 재배치",
  },
];

const STORAGE_KEY = "yg-asset-manager-v2";

const CATEGORY_CODES = [
  ["ADM", "일반비품"],
  ["IT", "IT기기"],
  ["EQ", "고가·생산장비"],
  ["TL", "공구"],
  ["SF", "안전장비"],
];

const SITE_CODES = [
  ["FA01", "공장 1"],
  ["FA02", "공장 2"],
  ["FA03", "공장 3"],
  ["FA04", "공장 4"],
  ["FA05", "공장 5"],
  ["OS01", "사무실 1"],
  ["OS02", "사무실 2"],
  ["OS03", "사무실 3"],
  ["OS04", "사무실 4"],
  ["OS05", "사무실 5"],
];

const ITEM_CODES = [
  ["DESK", "책상"],
  ["CHAIR", "의자"],
  ["CAB", "캐비닛"],
  ["MTABLE", "회의테이블"],
  ["PRINTER", "프린터"],
  ["MFP", "복합기"],
  ["MON", "모니터"],
  ["NOTEBOOK", "노트북"],
  ["PC", "데스크탑"],
  ["PHONE", "전화기"],
  ["AIR", "공기청정기"],
  ["FRIDGE", "냉장고"],
  ["WELDER", "용접기"],
  ["CUTTER", "절단기"],
  ["GAUGE", "측정기"],
  ["GASDETECT", "가스측정기"],
];

const LABEL_SIZE_BY_CATEGORY = {
  ADM: "60x35",
  IT: "50x30",
  EQ: "80x50",
  TL: "40x25",
  SF: "80x50",
};

const LABEL_MATERIAL_BY_CATEGORY = {
  ADM: "무광 PET",
  IT: "VOID 라벨",
  EQ: "파괴 라벨",
  TL: "강접착 소형 라벨",
  SF: "방수·내후성 라벨",
};

const els = {
  sheetUrl: document.querySelector("#sheetUrl"),
  syncBtn: document.querySelector("#syncBtn"),
  syncStatus: document.querySelector("#syncStatus"),
  csvInput: document.querySelector("#csvInput"),
  searchInput: document.querySelector("#searchInput"),
  statusFilter: document.querySelector("#statusFilter"),
  departmentFilter: document.querySelector("#departmentFilter"),
  categoryFilter: document.querySelector("#categoryFilter"),
  totalCount: document.querySelector("#totalCount"),
  categoryCount: document.querySelector("#categoryCount"),
  inUseCount: document.querySelector("#inUseCount"),
  repairCount: document.querySelector("#repairCount"),
  amountTotal: document.querySelector("#amountTotal"),
  statusBoard: document.querySelector("#statusBoard"),
  assetTable: document.querySelector("#assetTable"),
  emptyState: document.querySelector("#emptyState"),
  detailEmpty: document.querySelector("#detailEmpty"),
  detailContent: document.querySelector("#detailContent"),
  detailStatus: document.querySelector("#detailStatus"),
  detailName: document.querySelector("#detailName"),
  detailAssetNo: document.querySelector("#detailAssetNo"),
  assetPhotoFigure: document.querySelector("#assetPhotoFigure"),
  assetPhotoImage: document.querySelector("#assetPhotoImage"),
  changePhotoBtn: document.querySelector("#changePhotoBtn"),
  removePhotoBtn: document.querySelector("#removePhotoBtn"),
  detailPhotoInput: document.querySelector("#detailPhotoInput"),
  usageSummary: document.querySelector("#usageSummary"),
  usageUser: document.querySelector("#usageUser"),
  usageOrg: document.querySelector("#usageOrg"),
  usagePurpose: document.querySelector("#usagePurpose"),
  usageDueDate: document.querySelector("#usageDueDate"),
  startUsageBtn: document.querySelector("#startUsageBtn"),
  returnUsageBtn: document.querySelector("#returnUsageBtn"),
  usageHistory: document.querySelector("#usageHistory"),
  detailList: document.querySelector("#detailList"),
  qrImage: document.querySelector("#qrImage"),
  qrLink: document.querySelector("#qrLink"),
  labelGrid: document.querySelector("#labelGrid"),
  exportBtn: document.querySelector("#exportBtn"),
  labelCsvBtn: document.querySelector("#labelCsvBtn"),
  printBtn: document.querySelector("#printBtn"),
  printLabelsBtn: document.querySelector("#printLabelsBtn"),
  labelBtn: document.querySelector("#labelBtn"),
  inspectBtn: document.querySelector("#inspectBtn"),
  addAssetBtn: document.querySelector("#addAssetBtn"),
  assetDialog: document.querySelector("#assetDialog"),
  assetForm: document.querySelector("#assetForm"),
  assetPhotoInput: document.querySelector("#assetPhotoInput"),
  ruleCategory: document.querySelector("#ruleCategory"),
  ruleItem: document.querySelector("#ruleItem"),
  ruleIntroducedYm: document.querySelector("#ruleIntroducedYm"),
  ruleSeq: document.querySelector("#ruleSeq"),
  generatedAssetNo: document.querySelector("#generatedAssetNo"),
  copyAssetNoBtn: document.querySelector("#copyAssetNoBtn"),
  useAssetNoBtn: document.querySelector("#useAssetNoBtn"),
};

const state = {
  rows: loadRows(),
  selectedAssetNo: "",
  filters: {
    query: "",
    status: "전체",
    department: "전체",
    category: "전체",
  },
};

els.sheetUrl.value = DEFAULT_SHEET_URL;
initializeRuleBuilder();

function loadRows() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (Array.isArray(saved) && saved.length) return saved.map(normalizeRow);
  } catch (error) {
    console.warn("저장 데이터 읽기 실패", error);
  }
  return DEFAULT_ROWS.map(normalizeRow);
}

function saveRows() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.rows));
}

function normalizeCell(value) {
  if (value == null) return "";
  return String(value).trim();
}

function normalizeRow(row) {
  const normalized = {};
  HEADERS.forEach((header) => {
    normalized[header] = normalizeCell(row[header]);
  });
  if (!normalized["상태"]) normalized["상태"] = "사용 가능";
  if (!normalized["도입연월"]) normalized["도입연월"] = deriveIntroducedYm(normalized);
  if (!normalized["등록연도"]) normalized["등록연도"] = normalized["도입연월"].slice(0, 2);
  if (!normalized["순번"]) normalized["순번"] = deriveSequence(normalized["자산번호(최종)"]);
  if (!normalized["스티커크기"]) normalized["스티커크기"] = defaultLabelSize(normalized["자산구분코드"]);
  if (!normalized["스티커재질"]) normalized["스티커재질"] = defaultLabelMaterial(normalized["자산구분코드"]);
  if (!normalized["사용이력"]) normalized["사용이력"] = "[]";
  if (
    normalized["자산번호(최종)"] &&
    (!normalized["QR코드URL"] || isLegacyQrUrl(normalized["QR코드URL"]))
  ) {
    normalized["QR코드URL"] = assetQrUrl(normalized["자산번호(최종)"]);
  }
  return normalized;
}

function uniqueValues(key) {
  return [...new Set(state.rows.map((row) => normalizeCell(row[key])).filter(Boolean))].sort((a, b) =>
    a.localeCompare(b, "ko"),
  );
}

function fillSelect(select, values) {
  const current = select.value || "전체";
  select.innerHTML = ["전체", ...values].map((value) => `<option>${escapeHtml(value)}</option>`).join("");
  select.value = values.includes(current) ? current : "전체";
}

function renderFilters() {
  fillSelect(els.statusFilter, uniqueValues("상태"));
  fillSelect(els.departmentFilter, uniqueValues("관리부서"));
  fillSelect(els.categoryFilter, uniqueValues("자산구분코드"));
}

function initializeRuleBuilder() {
  fillCodeSelect(els.ruleCategory, CATEGORY_CODES);
  fillCodeSelect(els.ruleItem, ITEM_CODES);
  els.ruleCategory.value = "ADM";
  els.ruleItem.value = "DESK";
  els.ruleIntroducedYm.value = currentIntroducedYm();
  updateGeneratedAssetNo();
}

function fillCodeSelect(select, rows) {
  select.innerHTML = rows.map(([code, label]) => `<option value="${code}">${code} · ${label}</option>`).join("");
}

function generatedAssetNo() {
  const category = sanitizeCode(els.ruleCategory.value, 8);
  const item = sanitizeCode(els.ruleItem.value, 16);
  const introducedYm = normalizeIntroducedYm(els.ruleIntroducedYm.value || currentIntroducedYm());
  const seq = String(els.ruleSeq.value || "1").replace(/\D/g, "").padStart(3, "0").slice(-3);
  return `${category}-${item}-${introducedYm}-${seq}`;
}

function updateGeneratedAssetNo() {
  els.generatedAssetNo.value = generatedAssetNo();
}

function sanitizeCode(value, maxLength) {
  return String(value || "")
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "")
    .slice(0, maxLength);
}

function currentIntroducedYm() {
  const [year, month] = todayText().split("-");
  return `${year.slice(2)}${month}`;
}

function normalizeIntroducedYm(value) {
  const digits = String(value || "").replace(/\D/g, "");
  if (digits.length >= 6) return digits.slice(2, 6);
  return digits.padStart(4, "0").slice(-4);
}

function deriveIntroducedYm(row) {
  const fromAssetNo = String(row["자산번호(최종)"] || "").match(/-(\d{4})-\d{3}$/)?.[1];
  if (fromAssetNo) return fromAssetNo;
  const fromPurchase = String(row["구매일"] || "").match(/(\d{4})[-./년\s]*(\d{1,2})/) || [];
  if (fromPurchase[1] && fromPurchase[2]) return `${fromPurchase[1].slice(2)}${fromPurchase[2].padStart(2, "0")}`;
  return currentIntroducedYm();
}

function deriveSequence(assetNo) {
  return String(assetNo || "").match(/-(\d{3})$/)?.[1] || "";
}

function filteredRows() {
  const query = state.filters.query.trim().toLowerCase();
  return state.rows.filter((row) => {
    const searchable = [
      row["자산번호(최종)"],
      row["품명(실제명칭)"],
      row["모델명"],
      row["시리얼번호"],
      row["관리부서"],
      row["비고"],
    ]
      .join(" ")
      .toLowerCase();

    return (
      (!query || searchable.includes(query)) &&
      (state.filters.status === "전체" || row["상태"] === state.filters.status) &&
      (state.filters.department === "전체" || row["관리부서"] === state.filters.department) &&
      (state.filters.category === "전체" || row["자산구분코드"] === state.filters.category)
    );
  });
}

function renderMetrics(rows) {
  const totalAmount = state.rows.reduce((sum, row) => sum + parseAmount(row["구매금액"]), 0);
  els.totalCount.textContent = state.rows.length.toLocaleString("ko-KR");
  els.categoryCount.textContent = `${uniqueValues("자산구분코드").length}개 분류`;
  els.inUseCount.textContent = state.rows.filter((row) => row["상태"] === "사용 중").length.toLocaleString("ko-KR");
  els.repairCount.textContent = state.rows.filter((row) => row["상태"] === "수리 중").length.toLocaleString("ko-KR");
  els.amountTotal.textContent = formatCurrency(totalAmount);

  const grouped = groupBy(rows, "상태");
  const max = Math.max(1, ...Object.values(grouped));
  els.statusBoard.innerHTML = Object.entries(grouped)
    .sort(([a], [b]) => a.localeCompare(b, "ko"))
    .map(
      ([status, count]) => `
        <article class="status-card">
          <span>${escapeHtml(status || "미지정")}</span>
          <strong>${count.toLocaleString("ko-KR")}</strong>
          <div class="bar"><i style="width:${Math.max(8, (count / max) * 100)}%"></i></div>
        </article>
      `,
    )
    .join("");
}

function renderTable(rows) {
  els.emptyState.style.display = rows.length ? "none" : "block";
  els.assetTable.innerHTML = rows
    .map((row) => {
      const assetNo = row["자산번호(최종)"];
      const selected = assetNo === state.selectedAssetNo ? "selected" : "";
      return `
        <tr class="${selected}" data-asset-no="${escapeAttribute(assetNo)}">
          <td class="asset-no">${escapeHtml(assetNo)}</td>
          <td>${escapeHtml(row["품명(실제명칭)"])}</td>
          <td>${escapeHtml(row["관리부서"])}</td>
          <td>${escapeHtml(row["현재사용자"] || "-")}</td>
          <td><span class="status-badge ${statusClass(row["상태"])}">${escapeHtml(row["상태"])}</span></td>
          <td>${escapeHtml([row["사업장코드"], row["상세위치코드"]].filter(Boolean).join(" / "))}</td>
          <td>${escapeHtml([row["제조사"], row["모델명"]].filter((value) => value && value !== "-").join(" ")) || "-"}</td>
          <td>${escapeHtml(row["구매일"] || "-")}</td>
          <td>${escapeHtml(row["구매금액"] || "-")}</td>
        </tr>
      `;
    })
    .join("");
}

function renderDetail() {
  const row = selectedRow();
  els.detailEmpty.classList.toggle("hidden", Boolean(row));
  els.detailContent.classList.toggle("hidden", !row);
  if (!row) return;

  els.detailStatus.textContent = row["상태"];
  els.detailStatus.className = `status-badge ${statusClass(row["상태"])}`;
  els.detailName.textContent = row["품명(실제명칭)"] || "이름 없는 자산";
  els.detailAssetNo.textContent = row["자산번호(최종)"];
  renderAssetPhoto(row["사진링크"]);
  renderUsageTrace(row);

  const fields = [
    ["구분", `${row["자산구분코드"] || "-"} / ${row["품목코드"] || "-"}`],
    ["도입연월", row["도입연월"] || "-"],
    ["위치", [row["사업장코드"], row["상세위치코드"]].filter(Boolean).join(" / ") || "-"],
    ["관리부서", row["관리부서"] || "-"],
    ["현재사용자", row["현재사용자"] || "-"],
    ["사용자소속", row["사용자소속"] || "-"],
    ["사용시작일", row["사용시작일"] || "-"],
    ["반납예정일", row["반납예정일"] || "-"],
    ["사용목적", row["사용목적"] || "-"],
    ["제조사", row["제조사"] || "-"],
    ["모델명", row["모델명"] || "-"],
    ["시리얼", row["시리얼번호"] || "-"],
    ["구매일", row["구매일"] || "-"],
    ["구매금액", row["구매금액"] || "-"],
    ["스티커재질", row["스티커재질"] || defaultLabelMaterial(row["자산구분코드"])],
    ["QR 보안", "배포 URL / 사내 SSO 인가 예정"],
    ["최근상태변경일", row["최근상태변경일"] || "-"],
    ["최종실사일", row["최종실사일"] || "-"],
    ["비고", row["비고"] || "-"],
  ];

  els.detailList.innerHTML = fields
    .map(([label, value]) => `<dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd>`)
    .join("");

  const qrUrl = qrValueForRow(row);
  els.qrImage.src = qrImageUrl(qrUrl);
  els.qrLink.href = qrUrl;
  els.qrLink.textContent = qrUrl;
}

function renderAssetPhoto(photoValue) {
  const photo = normalizeCell(photoValue);
  const hasPhoto = photo && photo !== "-";
  els.assetPhotoFigure.classList.toggle("hidden", !hasPhoto);
  els.removePhotoBtn.classList.toggle("hidden", !hasPhoto);
  els.changePhotoBtn.textContent = hasPhoto ? "사진 변경" : "사진 등록";
  if (!hasPhoto) {
    els.assetPhotoImage.removeAttribute("src");
    return;
  }
  els.assetPhotoImage.src = photo;
}

function renderUsageTrace(row) {
  const user = row["현재사용자"] || "";
  const org = row["사용자소속"] || "";
  const dueDate = row["반납예정일"] || "";
  els.usageSummary.textContent = user
    ? `${user}${org ? ` / ${org}` : ""}${dueDate ? ` / 반납 예정 ${dueDate}` : ""}`
    : "현재 사용자 없음";

  els.usageUser.value = user;
  els.usageOrg.value = org;
  els.usagePurpose.value = row["사용목적"] || "";
  els.usageDueDate.value = dueDate;

  const history = usageHistory(row);
  els.usageHistory.innerHTML = history.length
    ? history
        .slice()
        .reverse()
        .map(
          (entry) => `
            <li>
              <strong>${escapeHtml(entry.type)}</strong>
              <span>${escapeHtml(entry.date || "-")} · ${escapeHtml(entry.user || "-")}${entry.org ? ` / ${escapeHtml(entry.org)}` : ""}</span>
              <small>${escapeHtml([entry.purpose, entry.dueDate ? `반납 예정 ${entry.dueDate}` : ""].filter(Boolean).join(" · ") || "-")}</small>
            </li>
          `,
        )
        .join("")
    : `<li class="muted-history">아직 사용 이력이 없습니다.</li>`;
}

function usageHistory(row) {
  try {
    const parsed = JSON.parse(row["사용이력"] || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

function writeUsageHistory(row, history) {
  row["사용이력"] = JSON.stringify(history);
}

function renderLabels(rows) {
  els.labelGrid.innerHTML = rows
    .map((row) => {
      const qrUrl = qrValueForRow(row);
      return `
        <article class="asset-label">
          <img alt="" src="${escapeAttribute(qrImageUrl(qrUrl))}" />
          <div>
            <strong>${escapeHtml(row["자산번호(최종)"])}</strong>
            <span>${escapeHtml(row["품명(실제명칭)"])}</span>
            <span>${escapeHtml(row["스티커크기"] || "50x30")}</span>
            <span>${escapeHtml(row["스티커재질"] || defaultLabelMaterial(row["자산구분코드"]))}</span>
            <span>${escapeHtml(qrUrl)}</span>
          </div>
        </article>
      `;
    })
    .join("");
}

function render() {
  const rows = filteredRows();
  if (rows.length && !rows.some((row) => row["자산번호(최종)"] === state.selectedAssetNo)) {
    state.selectedAssetNo = rows[0]["자산번호(최종)"];
  }
  if (!rows.length) {
    state.selectedAssetNo = "";
  }
  renderFilters();
  renderMetrics(rows);
  renderTable(rows);
  renderDetail();
  renderLabels(rows);
}

function selectedRow() {
  return state.rows.find((row) => row["자산번호(최종)"] === state.selectedAssetNo);
}

function groupBy(rows, key) {
  return rows.reduce((acc, row) => {
    const value = row[key] || "미지정";
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
}

function statusClass(status) {
  const normalized = (status || "기타").replace(/\s+/g, "-");
  return `status-${normalized}`;
}

function parseAmount(value) {
  const numeric = String(value || "").replace(/[^\d.-]/g, "");
  return Number(numeric) || 0;
}

function formatCurrency(value) {
  return new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "KRW",
    maximumFractionDigits: 0,
  }).format(value);
}

function qrImageUrl(value) {
  const qrValue = value || "about:blank";
  return `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(qrValue)}`;
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let value = "";
  let quoted = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];

    if (char === '"' && quoted && next === '"') {
      value += '"';
      index += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      row.push(value);
      value = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && next === "\n") index += 1;
      row.push(value);
      if (row.some((cell) => cell.trim())) rows.push(row);
      row = [];
      value = "";
    } else {
      value += char;
    }
  }

  row.push(value);
  if (row.some((cell) => cell.trim())) rows.push(row);
  return rows;
}

function rowsFromCsv(text) {
  const csvRows = parseCsv(text);
  const headerIndex = csvRows.findIndex((row) => row.includes("자산번호(최종)"));
  if (headerIndex < 0) {
    throw new Error("CSV에서 자산번호(최종) 헤더를 찾지 못했습니다.");
  }

  const headers = csvRows[headerIndex].map(normalizeCell);
  return csvRows
    .slice(headerIndex + 1)
    .map((cells) => {
      const row = {};
      headers.forEach((header, index) => {
        row[header] = normalizeCell(cells[index]);
      });
      return normalizeRow(row);
    })
    .filter((row) => row["자산번호(최종)"]);
}

function csvFromRows(rows) {
  const lines = [HEADERS, ...rows.map((row) => HEADERS.map((header) => row[header] || ""))];
  return lines.map((line) => line.map(csvEscape).join(",")).join("\n");
}

function stickerCsvFromRows(rows) {
  const stickerHeaders = [
    "asset_no",
    "asset_name",
    "asset_type",
    "item_code",
    "introduced_ym",
    "qr_value",
    "label_size",
    "label_material",
    "security_policy",
    "quantity",
  ];
  const lines = [
    stickerHeaders,
    ...rows.map((row) => [
      row["자산번호(최종)"],
      row["품명(실제명칭)"],
      row["자산구분코드"],
      row["품목코드"],
      row["도입연월"],
      qrValueForRow(row),
      row["스티커크기"] || defaultLabelSize(row["자산구분코드"]),
      row["스티커재질"] || defaultLabelMaterial(row["자산구분코드"]),
      "SSO required",
      row["인쇄수량"] || "1",
    ]),
  ];
  return lines.map((line) => line.map(csvEscape).join(",")).join("\n");
}

function defaultLabelSize(categoryCode) {
  return LABEL_SIZE_BY_CATEGORY[categoryCode] || "60x35";
}

function defaultLabelMaterial(categoryCode) {
  return LABEL_MATERIAL_BY_CATEGORY[categoryCode] || "무광 PET";
}

function qrValueForRow(row) {
  const existing = normalizeCell(row["QR코드URL"]);
  if (existing && !isLegacyQrUrl(existing)) return existing;
  return assetQrUrl(row["자산번호(최종)"]);
}

function assetQrUrl(assetNo) {
  const url = new URL(appBaseUrl());
  url.searchParams.set("asset", assetNo);
  url.hash = "assets";
  return url.toString();
}

function appBaseUrl() {
  if (typeof window !== "undefined" && /^https?:$/.test(window.location.protocol)) {
    return `${window.location.origin}${window.location.pathname || "/"}`;
  }
  return PUBLIC_APP_URL;
}

function isLegacyQrUrl(value) {
  return /^https?:\/\/cmp\.ny\//i.test(normalizeCell(value));
}

function csvEscape(value) {
  const text = String(value ?? "");
  if (/[",\n\r]/.test(text)) return `"${text.replace(/"/g, '""')}"`;
  return text;
}

function sheetCsvUrls(url) {
  const id = url.match(/\/spreadsheets\/d\/([^/]+)/)?.[1];
  const gid = url.match(/[?&#]gid=(\d+)/)?.[1] || "0";
  if (!id) throw new Error("Google Sheet URL을 확인해 주세요.");
  return [
    `https://docs.google.com/spreadsheets/d/${id}/export?format=csv&gid=${gid}`,
    `https://docs.google.com/spreadsheets/d/${id}/gviz/tq?tqx=out:csv&gid=${gid}`,
  ];
}

async function syncSheet() {
  const urls = sheetCsvUrls(els.sheetUrl.value);
  els.syncBtn.disabled = true;
  els.syncStatus.textContent = "시트 데이터를 불러오는 중입니다.";

  try {
    let lastError;
    for (const url of urls) {
      try {
        const response = await fetch(url, { cache: "no-store" });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const text = await response.text();
        const rows = rowsFromCsv(text);
        if (!rows.length) throw new Error("가져온 데이터가 비어 있습니다.");
        state.rows = rows;
        state.selectedAssetNo = rows[0]["자산번호(최종)"];
        saveRows();
        els.syncStatus.textContent = `${rows.length.toLocaleString("ko-KR")}건을 동기화했습니다.`;
        render();
        return;
      } catch (error) {
        lastError = error;
      }
    }
    throw lastError;
  } catch (error) {
    els.syncStatus.textContent =
      "브라우저에서 시트 CSV 접근이 막혔습니다. 시트를 웹에 게시하거나 CSV 가져오기를 사용하세요.";
    console.warn(error);
  } finally {
    els.syncBtn.disabled = false;
  }
}

function downloadCsv() {
  const blob = new Blob([`\ufeff${csvFromRows(filteredRows())}`], { type: "text/csv;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `asset_export_${todayText()}.csv`;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(link.href);
}

function downloadStickerCsv() {
  const blob = new Blob([`\ufeff${stickerCsvFromRows(filteredRows())}`], { type: "text/csv;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `label_print_${todayText()}.csv`;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(link.href);
}

function todayText() {
  const now = new Date();
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(now);
  const map = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${map.year}-${map.month}-${map.day}`;
}

function updateSelectedStatus(status) {
  const row = selectedRow();
  if (!row) return;
  row["상태"] = status;
  row["최근상태변경일"] = todayText();
  saveRows();
  render();
}

function inspectSelected() {
  const row = selectedRow();
  if (!row) return;
  row["최종실사일"] = todayText();
  row["최근상태변경일"] = todayText();
  saveRows();
  render();
}

function startSelectedUsage() {
  const row = selectedRow();
  if (!row) return;

  const user = normalizeCell(els.usageUser.value);
  if (!user) {
    els.syncStatus.textContent = "사용자 이름을 입력해 주세요.";
    return;
  }

  const org = normalizeCell(els.usageOrg.value);
  const purpose = normalizeCell(els.usagePurpose.value);
  const dueDate = normalizeCell(els.usageDueDate.value);
  const date = todayText();
  const history = usageHistory(row);

  row["현재사용자"] = user;
  row["사용자소속"] = org;
  row["사용시작일"] = date;
  row["반납예정일"] = dueDate;
  row["사용목적"] = purpose;
  row["상태"] = "사용 중";
  row["최근상태변경일"] = date;
  history.push({ type: "사용 시작", date, user, org, purpose, dueDate });
  writeUsageHistory(row, history);
  saveRows();
  render();
  els.syncStatus.textContent = `${row["자산번호(최종)"]} 사용자를 ${user}로 기록했습니다.`;
}

function returnSelectedUsage() {
  const row = selectedRow();
  if (!row) return;

  const date = todayText();
  const user = row["현재사용자"] || normalizeCell(els.usageUser.value) || "-";
  const org = row["사용자소속"] || normalizeCell(els.usageOrg.value);
  const purpose = row["사용목적"] || normalizeCell(els.usagePurpose.value);
  const history = usageHistory(row);

  history.push({
    type: "반납",
    date,
    user,
    org,
    purpose,
    dueDate: row["반납예정일"] || normalizeCell(els.usageDueDate.value),
  });
  row["현재사용자"] = "";
  row["사용자소속"] = "";
  row["사용시작일"] = "";
  row["반납예정일"] = "";
  row["사용목적"] = "";
  row["상태"] = "사용 가능";
  row["최근상태변경일"] = date;
  writeUsageHistory(row, history);
  saveRows();
  render();
  els.syncStatus.textContent = `${row["자산번호(최종)"]} 반납을 기록했습니다.`;
}

async function replaceSelectedPhoto(file) {
  const row = selectedRow();
  if (!row || !file) return;
  row["사진링크"] = await imageFileToDataUrl(file);
  row["최근상태변경일"] = todayText();
  saveRows();
  render();
  els.syncStatus.textContent = `${row["자산번호(최종)"]} 사진을 변경했습니다.`;
}

function removeSelectedPhoto() {
  const row = selectedRow();
  if (!row) return;
  row["사진링크"] = "";
  row["최근상태변경일"] = todayText();
  saveRows();
  render();
  els.syncStatus.textContent = `${row["자산번호(최종)"]} 사진을 삭제했습니다.`;
}

async function addAsset(form) {
  const data = new FormData(form);
  const row = {};
  HEADERS.forEach((header) => {
    row[header] = normalizeCell(data.get(header));
  });
  const photoFile = form.elements.assetPhoto?.files?.[0];
  if (photoFile) {
    row["사진링크"] = await imageFileToDataUrl(photoFile);
  }
  row["구매금액"] = row["구매금액"] ? formatCurrency(parseAmount(row["구매금액"])) : "";
  if (!row["도입연월"]) row["도입연월"] = deriveIntroducedYm(row);
  if (!row["등록연도"]) row["등록연도"] = row["도입연월"].slice(0, 2);
  if (!row["순번"]) row["순번"] = String(state.rows.length + 1);
  if (!row["스티커크기"]) row["스티커크기"] = defaultLabelSize(row["자산구분코드"]);
  if (!row["스티커재질"]) row["스티커재질"] = defaultLabelMaterial(row["자산구분코드"]);
  if (!row["인쇄수량"]) row["인쇄수량"] = "1";
  if (!row["QR코드URL"]) row["QR코드URL"] = assetQrUrl(row["자산번호(최종)"]);
  const normalized = normalizeRow(row);
  state.rows = [normalized, ...state.rows.filter((item) => item["자산번호(최종)"] !== normalized["자산번호(최종)"])];
  state.selectedAssetNo = normalized["자산번호(최종)"];
  saveRows();
  render();
}

function imageFileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    if (!file.type.startsWith("image/")) {
      reject(new Error("이미지 파일만 등록할 수 있습니다."));
      return;
    }

    const reader = new FileReader();
    reader.onerror = () => reject(new Error("사진 파일을 읽지 못했습니다."));
    reader.onload = () => {
      const image = new Image();
      image.onerror = () => reject(new Error("사진 이미지를 처리하지 못했습니다."));
      image.onload = () => {
        const maxSize = 1200;
        const scale = Math.min(1, maxSize / Math.max(image.width, image.height));
        const width = Math.max(1, Math.round(image.width * scale));
        const height = Math.max(1, Math.round(image.height * scale));
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, width, height);
        resolve(canvas.toDataURL("image/jpeg", 0.82));
      };
      image.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

function printLabels() {
  window.print();
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/`/g, "&#096;");
}

function selectAssetFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const assetNo = normalizeCell(params.get("asset"));
  if (!assetNo) return;

  const exists = state.rows.some((row) => row["자산번호(최종)"] === assetNo);
  if (exists) {
    state.selectedAssetNo = assetNo;
    state.filters.query = "";
    state.filters.status = "전체";
    state.filters.department = "전체";
    state.filters.category = "전체";
    return;
  }

  window.setTimeout(() => {
    els.syncStatus.textContent = `${assetNo} 비품을 현재 데이터에서 찾지 못했습니다. Google Sheet 또는 CSV 데이터를 확인해 주세요.`;
  }, 0);
}

els.searchInput.addEventListener("input", (event) => {
  state.filters.query = event.target.value;
  render();
});

els.statusFilter.addEventListener("change", (event) => {
  state.filters.status = event.target.value;
  render();
});

els.departmentFilter.addEventListener("change", (event) => {
  state.filters.department = event.target.value;
  render();
});

els.categoryFilter.addEventListener("change", (event) => {
  state.filters.category = event.target.value;
  render();
});

els.assetTable.addEventListener("click", (event) => {
  const row = event.target.closest("tr[data-asset-no]");
  if (!row) return;
  state.selectedAssetNo = row.dataset.assetNo;
  render();
});

document.querySelectorAll(".status-action").forEach((button) => {
  button.addEventListener("click", () => updateSelectedStatus(button.dataset.nextStatus));
});

els.inspectBtn.addEventListener("click", inspectSelected);
els.syncBtn.addEventListener("click", syncSheet);
els.exportBtn.addEventListener("click", downloadCsv);
els.labelCsvBtn.addEventListener("click", downloadStickerCsv);
els.printBtn.addEventListener("click", () => window.print());
els.printLabelsBtn.addEventListener("click", printLabels);
els.labelBtn.addEventListener("click", printLabels);

els.startUsageBtn.addEventListener("click", startSelectedUsage);
els.returnUsageBtn.addEventListener("click", returnSelectedUsage);

els.changePhotoBtn.addEventListener("click", () => {
  els.detailPhotoInput.value = "";
  els.detailPhotoInput.click();
});

els.removePhotoBtn.addEventListener("click", removeSelectedPhoto);

els.detailPhotoInput.addEventListener("change", async (event) => {
  const file = event.target.files?.[0];
  if (!file) return;
  try {
    await replaceSelectedPhoto(file);
  } catch (error) {
    els.syncStatus.textContent = error.message;
  } finally {
    event.target.value = "";
  }
});

els.addAssetBtn.addEventListener("click", () => {
  els.assetForm.reset();
  els.assetDialog.showModal();
});

[els.ruleCategory, els.ruleItem, els.ruleIntroducedYm, els.ruleSeq].forEach((control) => {
  control.addEventListener("input", updateGeneratedAssetNo);
  control.addEventListener("change", updateGeneratedAssetNo);
});

els.copyAssetNoBtn.addEventListener("click", async () => {
  updateGeneratedAssetNo();
  await navigator.clipboard.writeText(els.generatedAssetNo.value);
  els.syncStatus.textContent = `${els.generatedAssetNo.value} 번호를 복사했습니다.`;
});

els.useAssetNoBtn.addEventListener("click", () => {
  updateGeneratedAssetNo();
  els.assetForm.reset();
  els.assetForm.elements["자산번호(최종)"].value = els.generatedAssetNo.value;
  els.assetForm.elements["자산구분코드"].value = els.ruleCategory.value;
  els.assetForm.elements["품목코드"].value = els.ruleItem.value;
  els.assetForm.elements["도입연월"].value = normalizeIntroducedYm(els.ruleIntroducedYm.value);
  els.assetForm.elements["스티커재질"].value = defaultLabelMaterial(els.ruleCategory.value);
  els.assetForm.elements["상태"].value = "사용 가능";
  els.assetDialog.showModal();
});

els.assetForm.addEventListener("submit", async (event) => {
  if (event.submitter?.value === "cancel") return;
  event.preventDefault();
  try {
    await addAsset(els.assetForm);
    els.assetDialog.close();
  } catch (error) {
    els.syncStatus.textContent = error.message;
  }
});

els.csvInput.addEventListener("change", async (event) => {
  const file = event.target.files?.[0];
  if (!file) return;
  try {
    const text = await file.text();
    const rows = rowsFromCsv(text);
    state.rows = rows;
    state.selectedAssetNo = rows[0]?.["자산번호(최종)"] || "";
    saveRows();
    els.syncStatus.textContent = `${rows.length.toLocaleString("ko-KR")}건을 가져왔습니다.`;
    render();
  } catch (error) {
    els.syncStatus.textContent = error.message;
  } finally {
    event.target.value = "";
  }
});

if (!state.selectedAssetNo && state.rows[0]) {
  state.selectedAssetNo = state.rows[0]["자산번호(최종)"];
}

selectAssetFromUrl();
render();
