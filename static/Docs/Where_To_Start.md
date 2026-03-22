1. Think of an idea. What do you want. Chekc the kits. what does it have, what do u need.

Try to expand on that -- ok a tamagatchi only needs a screen buzzer and buttons, but wouldnt a motion detector be SO COOL so it wakes up when theres motion, or a light sensor so it can sleep

heck out [@alexren](https://github.com/qcoral/)’s [hwdocs.hackclub.dev](http://hwdocs.hackclub.dev), it has cool tips

### 2. What Software to use?

**3D Modeling / CAD?** Use Onshape or Fusion 360\!

- [**Onshape**](https://www.onshape.com/) is browser-based, great for lower-end machines, and has nice sharing features. Onshape is easier to use as well\! - Free for hobbyists and students
- [**Autodesk Fusion**](https://www.autodesk.com/products/fusion-360) handles complex models better, but is heavier on your computer. Try both and see what works for you\! - Free for students


**Modeling PCBs?** Use KiCad or EasyEDA\!

- [**KiCad**](https://kicad.org/) is an open source, professional-grade PCB suite that works for introductory projects and complex multi-layer PCB designs\! - Free and Open Source
- [**EasyEDA**](https://easyeda.com/) is browser-based, beginner-friendly platform for PCB design, but can be limiting for more complex projects. - Free for basic use

### 3. Building it IRL:

- Ask in the [\#breadboard](https://hackclub.enterprise.slack.com/archives/C037157AL30) channel on Slack\!


But \-– the best rule is:
Search. It. Up.
---

## Breadboard Mission Board

Pick one mission from each column and you have a project plan.

| Core Build | Nice Upgrade | Show-Off Touch |
| :--- | :--- | :--- |
| Blink an LED pattern | Add a mode button | Laser-cut faceplate |
| Read a sensor value | Add a tiny screen | Boot animation |
| Make a buzzer alert | Add mute/profile modes | Sound theme |
| Servo moves on trigger | Add calibration menu | 3D printed enclosure |

---

## Build Quality Checklist

Use this before you call a build version done.

- [ ] Powers on reliably 5 times in a row
- [ ] Wires are labeled or color-consistent
- [ ] Core feature works without laptop connected
- [ ] Buttons and inputs are debounced or stable
- [ ] You can explain the circuit in under 60 seconds
- [ ] You captured at least 3 progress photos

---

## Debug Playbook

When something fails, run this in order:

1. Power: confirm voltage and common ground.
2. Wiring: verify pin-by-pin against your diagram.
3. Minimal test: strip code to the smallest failing case.
4. Replace assumptions with measurements.
5. Ask for help with photos, code, and exact behavior.

```txt
Good help request format:
- Goal: what should happen
- Actual: what happens instead
- Tried: three things already tested
- Attach: wiring photo + code snippet + error text
```

---

## Shipping Your Project Story

Great projects are built twice: once in hardware, once in documentation.

### Your docs should include

- One sentence pitch
- Parts list with links
- Wiring diagram or pin map
- Setup steps someone else can follow
- Photos or short demo clip
- What failed and what you changed

### Fast template

```md
# Project Name

## What it does
## Why I built it
## Parts used
## Wiring
## Code
## Lessons learned
## Next version
```

---

## Need Ideas Right Now?

- Mood lamp that reacts to room light
- Desk timer with physical start/stop lever
- Pomodoro pet that gets happier when you focus
- Mailbox notifier with distance sensor
- Tiny weather station with local display

If you build one this weekend, post it in [#breadboard](https://hackclub.enterprise.slack.com/archives/C037157AL30).
