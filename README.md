# RetroMarks Manager

**Version:** Beaver 1.0  
**Licence:** GPLv3  
**Repo:** [https://github.com/gordonstevens/RetroMarks](https://github.com/gordonstevens/RetroMarks)

## Overview

RetroMarks is a fast, accessible, and retro-styled bookmark manager designed for power users who find modern bookmark interfaces too spaced out and sluggish. It brings back the dense, information-rich "split-pane" layout of the past, updated with modern web standards and strict accessibility compliance.

Whether you have 100 bookmarks or **over 9000**, RetroMarks renders them instantly. This project was born out of frustration with the default bookmark managers slowing down under heavy loads—RetroMarks is built to be fast.

## Features

* **Classic Split-Pane Manager:** Navigate your folder tree on the left and view detailed lists on the right.
* **Unified Sidebar Mode:** A dedicated side panel view that integrates perfectly with your browser workflow.
* **High Density Layout:** See more information at a glance without endless scrolling.
* **Accessibility First:** Fully compliant with **WCAG 2.2 AAA** standards. Includes high-contrast themes, focus indicators, and full keyboard navigation support.
* **Theme Engine:** Automatic Light/Dark mode detection based on your system settings, with a manual toggle.
* **Drag & Drop:** Easily organize folders and links within the manager or sidebar.
* **Advanced Sorting:** Sort by Name, URL, or Date (Ascending/Descending/Newest/Oldest).
* **Privacy Focused:** Your data never leaves your browser.

## Browser Compatibility

RetroMarks is built for Chromium-based browsers.

| Browser | Status | Version Tested |
| :--- | :--- | :--- |
| **Google Chrome** | Supported | v142 |
| **Brave** | Supported | v1.84 |
| **Microsoft Edge** | Supported | v142 |

**Note:** This extension has **not** been tested in Opera, Vivaldi, or other Chromium variants, though it is likely to function.

## Installation

Since RetroMarks allows you full control over your data, you can install it directly from the source code.

1.  Download the latest release or clone this repository.
2.  Unzip the file if necessary. You should have a folder named `extension-build`.
3.  Open your browser and navigate to the Extensions management page (usually `chrome://extensions`).
4.  Enable **"Developer mode"** (toggle in the top right corner).
5.  Click **"Load unpacked"**.
6.  Select the `extension-build` folder from this project.

### Post-Install Setup
To get the most out of RetroMarks, pin it to your toolbar:
1.  Click the "Puzzle Piece" icon in your browser toolbar.
2.  Find **RetroMarks Manager**.
3.  Click the **Pin** icon.

## Chrome Profiles & Data Isolation

It is important to note that **Chrome Extensions are installed per-profile**.

If you use multiple profiles (e.g., "Work," "Personal," "School"), you must install RetroMarks separately on each profile where you wish to use it.

* **Data Isolation:** RetroMarks running in your "Work" profile can **only** see and manage your "Work" bookmarks. It has zero access to your "Personal" bookmarks, and vice versa.
* **Privacy:** This ensures strict separation of concerns. Your bookmark data, settings (like Dark Mode preference), and history remain completely isolated within the active profile.

## Usage Guide

### Opening the Manager
Click the RetroMarks icon in your toolbar to open the full-screen Manager tab.

### Using the Sidebar
RetroMarks includes a native Side Panel for easy access while browsing.
1.  Open your browser's Side Panel (usually an icon near your profile picture).
2.  Select **RetroMarks** from the dropdown menu.
3.  Alternatively, right-click anywhere on a webpage and select **"Open RetroMarks Sidebar"**.

### Managing Bookmarks
* **Add:** Right-click on any empty space or use the header menu to add a new Bookmark or Folder.
* **Edit/Delete:** Right-click on any item in the list or tree to edit its details or delete it.
* **Sort:** Click the column headers (Name, URL, Date) to cycle through sorting options (Ascending, Descending, Default).
* **Import/Export:** RetroMarks works directly with your browser's native bookmark database. To import or export your data, please use your browser's built-in Bookmark Manager functionality.

## Internationalisation (Languages)

RetroMarks detects your system language automatically. You can also manually switch languages via the settings menu.

**Currently Supported Languages:**
* English (en)
* Italian (it)
* Spanish (es)
* Welsh (cy)
* Scots Gaelic (gd)
* Irish (ga)
* Chinese Simplified (zh-CN)
* Chinese Traditional (zh-TW)
* Hindi (hi)
* Vietnamese (vi)
* Thai (th)
* Japanese (ja)
* Latin (la)
* Sanskrit (sa)
* Tamil (ta)
* Nepali (ne)
* Bengali (bn)

*Additional languages are available upon request.*

## Privacy & Security

**I do not want your data.**

RetroMarks is fully open source. You are free (and encouraged) to audit the code at your leisure.
* The extension runs entirely offline.
* It communicates **only** with your local browser's bookmark API.
* No analytics, no tracking, and no external servers are used.

*Note: The privacy of the browser itself is subject to the respective licence and legal jurisdiction of the browser vendor (Google, Microsoft, Brave, etc.).*

## Licence & Legal

### The "plain English" summary:
This project is free and open. You can use it, study it, and modify it. If you distribute a modified version of this software, you must keep it open source under the same licence (GPLv3).

### Disclaimer
**I make no guarantee for fitness of purpose.** This software is provided "as is," without warranty of any kind, express or implied. By using this software, you agree that the author shall not be held liable for any damages or data loss arising from its use.

### The Licence
RetroMarks is licensed under the **GNU General Public License v3.0 (GPLv3)**.

> Permissions of this strong copyleft licence are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same licence. Copyright and licence notices must be preserved. Contributors provide an express grant of patent rights.
