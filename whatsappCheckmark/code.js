async function selectAllAndDelete(el) {
  el.focus();

  // Simulate Ctrl/Command + A down
  el.dispatchEvent(new KeyboardEvent('keydown', { key: 'Control', code: 'ControlLeft', ctrlKey: true, bubbles: true }));
  el.dispatchEvent(new KeyboardEvent('keydown', { key: 'a', code: 'KeyA', ctrlKey: true, bubbles: true }));

  // Simulate Ctrl/Command + A up
  el.dispatchEvent(new KeyboardEvent('keyup', { key: 'a', code: 'KeyA', ctrlKey: true, bubbles: true }));
  el.dispatchEvent(new KeyboardEvent('keyup', { key: 'Control', code: 'ControlLeft', bubbles: true }));

  // Small delay to let selection settle
  await new Promise(r => setTimeout(r, 100));

  // Simulate Delete key press
  el.dispatchEvent(new KeyboardEvent('keydown', { key: 'Delete', code: 'Delete', bubbles: true }));
  el.dispatchEvent(new KeyboardEvent('keypress', { key: 'Delete', code: 'Delete', bubbles: true }));
  el.dispatchEvent(new KeyboardEvent('keyup', { key: 'Delete', code: 'Delete', bubbles: true }));

  // Dispatch input event so app notices
  el.dispatchEvent(new InputEvent('input', { bubbles: true }));
}

async function typeIntoContentEditable(el, text, delay = 50) {
  el.focus();
  await new Promise(r => setTimeout(r, delay));

  document.execCommand("insertText", false, text);
  await new Promise(r => setTimeout(r, delay));

  el.dispatchEvent(new InputEvent("input", { bubbles: true }));
}

function chunkArray(arr, size = 12) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

async function submitPoll(delay) {
  document.querySelector('.x78zum5.x6s0dn4.xl56j7k.xexx8yu.xyri2b.x18d9i69.x1c1uobl.x1f6kntn.xk50ysn.x7o08j2.xtvhhri.x1rluvsa.x14yjl9h.xudhj91.x18nykt9.xww2gxu.xu306ak.xwwtwea.x1gfkgh9.x1247r65.xng8ra.x1cb1t30.x1ys307a.xs2xxs2.x1d8287x').click();
  await new Promise(r => setTimeout(r, delay));
}

async function newPoll(delay) {
  document.querySelector('.x100vrsf.x1vqgdyp.x78zum5.x6s0dn4').childNodes[0].click();
  await new Promise(r => setTimeout(r, delay));

  document.querySelectorAll('.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.x1nhvcw1.x1q0g3np.x6s0dn4.x1ypdohk.x1vqgdyp.x13fj5qh.x1dqj196')[5].click();
  await new Promise(r => setTimeout(r, delay));
}

async function fillTasks() {
  const chatboxElemnet = document.querySelectorAll("[contenteditable=true]")[1];
  const STR = chatboxElemnet.innerText;
  await selectAllAndDelete(chatboxElemnet)
 
  const taskList = STR.split('\n').map(s => s.trim()).filter(x => x!= '');
  const chunkedTaskList = chunkArray(taskList);
    console.log(chunkedTaskList)
  delay = 2000;

  for (let j = 0; j < chunkedTaskList.length; j++) {
    await newPoll(delay);

    questionElement = document.querySelectorAll('[contenteditable=true]')[0];
    await typeIntoContentEditable(questionElement, `${j + 1}/${chunkedTaskList.length}`);

    mainElemPath = document.querySelectorAll('[contenteditable=true]')[1]
      .parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;

    const twelveTasks = chunkedTaskList[j];
    for (let i = 0; i < twelveTasks.length; i++) {
      const elem = mainElemPath.childNodes[i].querySelector('[contenteditable=true]');
      await typeIntoContentEditable(elem, twelveTasks[i]);
    }
    await submitPoll(delay);
  }
}


fillTasks();
