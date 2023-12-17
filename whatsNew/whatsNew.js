async function whatsNewCheck(showOnlyOnce = true) {

  var manifestVersion = chrome.runtime.getManifest().version;

  check = await storageGetPromise("whatsNewV" + manifestVersion);

  silentupdates = ["3.0.3"]

  const FIGAF_IMG = chrome.runtime.getURL("images/figaf_logo-or3aup2a4kcerbzkw8qe9fj133kv700baqsm2nnpj4.png");

  if (!check && !silentupdates.includes(manifestVersion) || showOnlyOnce == false) {
    html = `<div class="ui icon positive message">
              <i class="info icon"></i>
              <div class="content">
                <div class="header">
                  You updated successfully to version ${manifestVersion}
                </div>
                <p>Follow our <a href="https://www.linkedin.com/company/kangoolutions" target="_blank">LinkedIn page</a> for
                  updates and news about CPI Helper.</p>
              </div>
            </div>
            <div class="ui segment">
              <div class="ui top attached tabular menu" id="cpiHelper_whatsnew_tabs">
                <a class="item active" data-tab="one">News</a>
                <a class="item" data-tab="two">Features</a>
                <a class="item" data-tab="three">About</a>
              </div>
            <div class="ui bottom attached tab segment" data-tab="one">
              <div class="ui segment">
                <div class="ui grid">
                  <div class="four wide column">
                    <a href="https://figaf.com/cpihelper-and-figaf" target="_blank"><img class="ui small left floated image"
                        src="${FIGAF_IMG}"></a>
                  </div>
                  <div class="twelve wide column">
                    <div class="ui header">This release is sponsored by Figaf </div>
                    <p>
                    As we end the year, you are planning what to do with your SAP integration in 2024. Please consider Figaf it will make your life easier.
               </p>
                    If you want to see some of the areas where we can see, check our advent calendar <a href="https://figaf.com/cpihelper10" target="_blank"><u>here</u></a>.
                  </div>
                </div>
              </div>
              <h3 class="ui header">
              <i class="bell icon"></i>
              <div class="content">
                Christmas Release 2023
              </div>
              </h3>
              <p>
              This release is filled with new UI features and improvements. CPI Helper is free and open source, so perhaps you would like to assist us in contributing new features and bug fixes. Our community is expanding, and we would like to give a special thanks to Daniel Graversen and his amazing Figaf Tools, which have helped me dedicate more time to developing the CPI Helper. For those celebrating Christmas, we wish you a merry Christmas and a happy new year.<br />
              Best regards,<br />
              <a href="https://www.linkedin.com/in/dominic-beckbauer-515894188/">Dominic Beckbauer</a>
              </p>
            </h3>
              <h3 class="ui header">
                <i class="bell icon"></i>
                <div class="content">
                  What's New?
                </div>
              </h3>
              <div class="ui list">
               
                <a class="item"><i class="right triangle icon"></i>
                  <div class="content">
                    <div class="header">Feature</div>
                    <div class="description">Hundreds of ui improvements. Thanks to Omkar Patel</div>
                  </div>
                </a>
                <a class="item"><i class="right triangle icon"></i>
                <div class="content">
                  <div class="header">Feature</div>
                  <div class="description">Many under the hood improvements</div>
                </div>
              </a>
              <a class="item"><i class="right triangle icon"></i>
              <div class="content">
                <div class="header">Improvement</div>
                <div class="description">Updated Fomantic UI to 2.9.3</div>
              </div>
            </a>
                <a class="item"><i class="right triangle icon"></i>
                  <div class="content">
                    <div class="header">Bugfix</div>
                    <div class="description">Many bugfixes</div>
                  </div>
                </a>
                <h3 class="ui header">
                  <a href="https://www.linkedin.com/company/kangoolutions" target="_blank"><i
                      class="linkedin icon"></i></a>
                  <div class="content">
                    Follow us on <a href="https://www.linkedin.com/company/kangoolutions" target="_blank">LinkedIn</a>
                  </div>
                </h3>
                <h3 class="ui header">
                  <a href="https://github.com/dbeck121/CPI-Helper-Chrome-Extension" target="_blank"> <i
                      class="github icon"></i></a>
                  <div class="content">
                    More details on <a href="https://github.com/dbeck121/CPI-Helper-Chrome-Extension"
                      target="_blank">Github</a>
                  </div>
                </h3>
              </div>
            </div>
            <div class="ui bottom attached tab segment" data-tab="two">
              <h3 class="ui header">
                <i class="project diagram icon"></i>
                <div class="content">
                  Main Features
                </div>
              </h3>
              <div class="ui list">
                <a class="item">
                  <i class="right triangle icon"></i>
                  <div class="content">
                    <div class="description">Message Sidebar with Logs and InlineTrace</div>
                  </div>
                </a>
                <a class="item">
                  <i class="right triangle icon"></i>
                  <div class="content">
                    <div class="description">Log Viewer</div>
                  </div>
                </a>
                <a class="item">
                  <i class="right triangle icon"></i>
                  <div class="content">
                    <div class="description">PowerTrace - Trace keeps running even after 10 minutes</div>
                  </div>
                </a>
              </div>
              <p>To learn more about CPI Helper features and what's new on our <a
                  href="https://github.com/dbeck121/CPI-Helper-Chrome-Extension" target="_blank">Github
                  Page</a>.</p>
              <p>Unfortunately, SAP does not work with us together and does not inform us when the APIs change. So be
                gentle if sth. does not work. We do this in our free time and sometimes it takes a while to adapt to
                SAP changes.</p>
            </div>
            <div class="ui bottom attached tab segment active" data-tab="three">
              <h3 class="ui header">
                <a href="https://www.linkedin.com/company/kangoolutions" target="_blank"><i class="linkedin icon"></i></a>
                <div class="content">
                  Follow us on <a href="https://www.linkedin.com/company/kangoolutions" target="_blank">LinkedIn</a></a>
                </div>
              </h3>
              <h3 class="ui header">
                <i class="user icon"></i>
                <div class="content">
                  About us
                </div>
              </h3>
              <p>We are a small company of passionate SAP CI developers from Cologne, Germany. If you want to learn
                more about us, please visit our website <a href="https://kangoolutions.com"
                  target="_blank">kangoolutions.com</a>. Or maybe you want to become part of the team? Then have a
                look <a href="https://ich-will-zur.kangoolutions.com/" target="_blank">here</a> (German only).
                Unfortunately, we can only consider applicants with german residence due to legal reasons.</p>
              <h3 class="ui header">
                <i class="comment icon"></i>
                <div class="content">
                  Take Part
                </div>
              </h3>
              <p>The CPI Helper is free and Open Source. If you want to contribute (especially improve overall CPI
                Helper visual design. We really aren't frontend developers) or you have found any bugs then have a
                look at our <a href="https://github.com/dbeck121/CPI-Helper-Chrome-Extension" target="_blank">GitHub
                  Page</a> and our <a href="https://kangoolutions.com" target="_blank">Homepage</a>. You can find
                the main developer Dominic Beckbauer on <a
                  href="https://www.linkedin.com/in/dominic-beckbauer-515894188/">LinkedIn</a></p>
              <h3 class="ui header">
                <i class="glasses icon"></i>
                <div class="content">
                  More Details
                </div>
              </h3>
              <div>License: <a href="https://www.gnu.org/licenses/gpl-3.0.en.html" target="_blank">GNU GPL v3</a>
              </div>
              <div>Please also check our <a href="https://github.com/dbeck121/CPI-Helper-Chrome-Extension"
                  target="_blank">Github
                  Page</a>.
              </div>
              <div>Created by: Dominic Beckbauer and Kangoolutions.com</div>
              </div></div>`;
    await showBigPopup(html, "Your SAP CI Toolbox since 1963", { "fullscreen": false, callback: () => { $('.menu .item').tab(); } });

    var obj = {};
    obj["whatsNewV" + manifestVersion] = "show";
    chrome.storage.local.set(obj, function () {
      log.log("whats new displayed and saved");
    });

    return true
  }
  return false

  //persist so that the popup does not appear again
}

async function recrutingPopup(force = false) {
  //shows a popup if browser language is German and if timestamp is not set or today is after timestamp in chrome storage

  //show only for a fraction of user for testing

  var randomGroup = parseInt(await storageGetPromise("recrutingPopupRandomGroup"));

  if(!randomGroup) {
    randomGroup = Math.floor(Math.random() * 100);
    var obj =  {}
    obj["recrutingPopupRandomGroup"] = randomGroup
    await storageSetPromise(obj)
  }

  if(!force && randomGroup > 10) {
    return
  }

  var lang = navigator.language || navigator.userLanguage;
  var timestamp = parseInt(await storageGetPromise("recrutingPopupTimestamp"));
  var today = +new Date();

  if (lang == "de-DE" && (force || !timestamp || timestamp < today)) {
    var html = `<div><div class="ui icon positive message">
                  <i class="info icon"></i>
                  <div class="content">
                    <div class="header">
                      Wir suchen Verstärkung!
                    </div>
                    <p>Wir sind ein kleines Team aus leidenschaftlichen SAP CI Entwicklern aus Köln. Wenn du mehr über uns erfahren willst, besuche unsere Website <a href="https://kangoolutions.com" target="_blank">kangoolutions.com</a>. Oder vielleicht willst du Teil des Teams werden? Dann schau dir <a href="https://ich-will-zur.kangoolutions.com/" target="_blank">hier</a> unsere Stellenangebote an.</p>
                  </div>
                </div>
                </div>`;

    var popup = createElementFromHTML(html);

    var createRemindButtopn = function (text, days) {
      var button = document.createElement("button");
      button.className = "ui button";
      button.innerText = text;
      button.onclick = async function () {
        statistic("recrutingPopup","remind", days)
        
        //get unix timestamp for tomorrow
        var tomorrow = +new Date() + days*24*60*60*1000;

        var obj = {};
        obj["recrutingPopupTimestamp"] = tomorrow;
        chrome.storage.local.set(obj, function () {
          log.log("recruting popup timestamp set to today + " + days + " days");
        });

        $('#cpiHelper_semanticui_modal').modal('hide');
      }
      return button
    }

    popup.appendChild(createRemindButtopn("Erinnere mich morgen", 1))
    popup.appendChild(createRemindButtopn("Erinnere mich in einem Monat", 30))
    popup.appendChild(createRemindButtopn("Erinnere mich in einem halben Jahr", 190))

    //create br
    var br = document.createElement("br");
    popup.appendChild(br);

    popup.appendChild(createRemindButtopn("Erinnere mich nicht mehr", 9999))

    await showBigPopup(popup, "Wir suchen Verstärkung!", { "fullscreen": false });
   
  }



}