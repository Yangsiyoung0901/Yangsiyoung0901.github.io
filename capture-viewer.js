const captures = {
  time: {
    before: { file: 'nav-time-before', title: '제어는 도착, 도착 검사는 범위 밖', label: '수정 전 · 판정 화면', text: '제어 거리 3.9407cm와 저장 TF로 재계산한 검사 거리 5.0957cm를 비교합니다. 같은 순간에도 서로 다른 기준 시각 때문에 판단이 엇갈렸습니다.' },
    after: { file: 'nav-time-after', title: '같은 위치·시각으로 두 판단을 일치', label: '수정 후 · 동일 입력 비교', text: '제어 pose와 TF 시각을 공유해 두 거리가 3.9407cm로 일치합니다. 4cm 허용값을 유지한 독립 ControllerServer 핵심 회귀 시험으로 확인했습니다.' },
    scope: '2026.10.20 저장 TF 재생 · 검사 거리는 저장 TF 재계산값 · 수정 후는 동일 입력 비교입니다.',
  },
  sec12: {
    before: { file: 'nav-short-before', title: '1.81cm 횡오차인데 다음 이동을 거절', label: '수정 전 · SEC12 판정 화면', text: '차체 방향 오차 −0.282°와 목표 연결선 각도 8.105°를 혼용했습니다. 다음 Nav2 이동을 보내기 전에 APPROACH_RECOVERY_REQUIRED로 거절했습니다.' },
    after: { file: 'nav-short-after', video: true, title: '조건을 분리하고, 원래 목표에 도착', label: '수정 후 · SEC12 이동 기록', text: '기존 목표와 5cm / 3° 도착 기준을 유지한 이동 시험입니다. 최종 추정 위치 오차 3.33cm, 방향 오차 1.74°, 실제 이동+정지 시간 6.72초를 기록했습니다.' },
    scope: '2026.10.23 Isaac / Nav2 저장 기록 · 초기 yaw는 베드 방향으로 정렬 · 15초 편집 재생이며 실제 이동 속도와 다릅니다.',
  },
  sec16: {
    before: { file: 'nav-short-sec16-before', title: '9cm 앞 목표도 같은 조건에서 거절', label: '수정 전 · SEC16 판정 화면', text: '전방거리 9.02cm, 횡오차 1.28cm, 차체 방향 오차 +0.045°인 입력입니다. 목표 연결선 각도 8.100°를 차체 방향 제한과 혼용해 이동을 거절했습니다.' },
    after: { file: 'nav-short-sec16-after', video: true, title: '다른 구간에서도 다음 목표 도착 확인', label: '수정 후 · SEC16 이동 기록', text: '같은 수정과 기존 도착 기준으로 두 번째 구간을 확인했습니다. 최종 추정 위치 오차 2.15cm, 방향 오차 0.25°, 실제 이동+정지 시간 5.76초를 기록했습니다.' },
    scope: '2026.10.23 Isaac / Nav2 저장 기록 · 초기 yaw는 베드 방향으로 정렬 · 15초 편집 재생이며 실제 이동 속도와 다릅니다.',
  },
};
const viewer = document.getElementById('capture-viewer');
if (viewer) {
  let selected = 'sec12', state = 'after';
  const tabs = [...viewer.querySelectorAll('[data-capture]')];
  const states = [...viewer.querySelectorAll('[data-capture-state]')];
  function render() {
    viewer.querySelectorAll('video').forEach(v => v.pause());
    const entry = captures[selected], item = entry[state];
    const file = `assets/replays/${item.file}`;
    tabs.forEach(b => { const active = b.dataset.capture === selected; b.classList.toggle('active', active); b.setAttribute('aria-pressed', active); });
    states.forEach(b => { const active = b.dataset.captureState === state; b.classList.toggle('active', active); b.setAttribute('aria-pressed', active); });
    viewer.querySelector('.capture-label').textContent = item.label;
    viewer.querySelector('.capture-title').textContent = item.title;
    viewer.querySelector('.capture-description').textContent = item.text;
    viewer.querySelector('.capture-scope').textContent = entry.scope;
    viewer.querySelector('.capture-media').innerHTML = item.video
      ? `<video controls playsinline preload="metadata" poster="${file}.png" aria-label="${item.label} · 저장 로그 RViz 재생 · 무음" aria-describedby="capture-description capture-scope"><source src="${file}.mp4" type="video/mp4">브라우저가 영상을 지원하지 않습니다. <a href="${file}.mp4">영상 열기</a></video>`
      : `<button class="zoom" data-zoom="${file}.png" data-caption="${item.label} · ${entry.scope}"><img src="${file}.png" alt="${item.title} · RViz 저장 로그 재생" width="2016" height="1106" loading="lazy"></button>`;
    const zoom = viewer.querySelector('.capture-original');
    zoom.dataset.zoom = `${file}.png`;
    zoom.dataset.caption = `${item.label} · ${entry.scope}`;
    zoom.textContent = item.video ? '최종 판정 화면 확대 ↗' : '원본 화면 확대 ↗';
  }
  tabs.forEach(b => b.addEventListener('click', () => { selected = b.dataset.capture; render(); }));
  states.forEach(b => b.addEventListener('click', () => { state = b.dataset.captureState; render(); }));
  render();
}
