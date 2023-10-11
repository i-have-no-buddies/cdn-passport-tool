// datalist search country of origin
let inpCountryOfOrigin = document.querySelector('#inpCountryOfOrigin');
let countryOfOriginResult = document.querySelector('#countryOfOriginResult');
let templateCountryOfOrigin = document.querySelector(
  '#templateCountryOfOrigin'
).content;
inpCountryOfOrigin.addEventListener('keyup', function handler(event) {
  while (countryOfOriginResult.children.length)
    countryOfOriginResult.removeChild(countryOfOriginResult.firstChild);
  let inputVal = new RegExp(inpCountryOfOrigin.value.trim(), 'i');
  let set = Array.prototype.reduce.call(
    templateCountryOfOrigin.cloneNode(true).children,
    function searchFilter(frag, item, i) {
      if (inputVal.test(item.textContent) && frag.children.length < 6)
        frag.appendChild(item);
      return frag;
    },
    document.createDocumentFragment()
  );
  countryOfOriginResult.appendChild(set);
});

// datalist search destination country
let inpDestinationCountry = document.querySelector('#inpDestinationCountry');
let destinationCountryResult = document.querySelector(
  '#destinationCountryResult'
);
let templateDestinationCountry = document.querySelector(
  '#templateDestinationCountry'
).content;
inpDestinationCountry.addEventListener('keyup', function handler(event) {
  while (destinationCountryResult.children.length)
    destinationCountryResult.removeChild(destinationCountryResult.firstChild);
  let inputVal = new RegExp(inpDestinationCountry.value.trim(), 'i');
  let set = Array.prototype.reduce.call(
    templateDestinationCountry.cloneNode(true).children,
    function searchFilter(frag, item, i) {
      if (inputVal.test(item.textContent) && frag.children.length < 6)
        frag.appendChild(item);
      return frag;
    },
    document.createDocumentFragment()
  );
  destinationCountryResult.appendChild(set);
});

function generateUrl() {
  let url = window.location.href.split('?')[0];
  let country_of_origin = $('#inpCountryOfOrigin').val();
  let destination_country = $('#inpDestinationCountry').val();
  url += `?country_of_origin=${country_of_origin}`;
  url += `&destination_country=${destination_country}`;
  window.location.href = url;
}

function generatePdf() {
  // $('[id^=flush-collapse-]').attr('class', 'accordion-collapse collapse show');
  // html2canvas($('#PdfElement'), {
  //   useCORS: true,
  //   allowTaint: true,
  //   scrollY: 0,
  // }).then((canvas) => {
  //   const image = { type: 'jpeg', quality: 0.98 };
  //   const margin = [0.5, 0.5];
  //   var imgWidth = 8.3;
  //   var pageHeight = 11.7;
  //   var innerPageWidth = imgWidth - margin[0] * 2;
  //   var innerPageHeight = pageHeight - margin[1] * 2;
  //   // Calculate the number of pages.
  //   var pxFullHeight = canvas.height;
  //   var pxPageHeight = Math.floor(canvas.width * (pageHeight / imgWidth));
  //   var nPages = Math.ceil(pxFullHeight / pxPageHeight);
  //   // Define pageHeight separately so it can be trimmed on the final page.
  //   var pageHeight = innerPageHeight;
  //   // Create a one-page canvas to split up the full image.
  //   var pageCanvas = document.createElement('canvas');
  //   var pageCtx = pageCanvas.getContext('2d');
  //   pageCanvas.width = canvas.width;
  //   pageCanvas.height = pxPageHeight;
  //   // Initialize the PDF.
  //   var pdf = new jsPDF('p', 'in', [11.7, 8.3]);
  //   for (var page = 0; page < nPages; page++) {
  //     // Trim the final page to reduce file size.
  //     if (page === nPages - 1 && pxFullHeight % pxPageHeight !== 0) {
  //       pageCanvas.height = pxFullHeight % pxPageHeight;
  //       pageHeight = (pageCanvas.height * innerPageWidth) / pageCanvas.width;
  //     }
  //     // Display the page.
  //     let w = pageCanvas.width;
  //     let h = pageCanvas.height;
  //     pageCtx.fillStyle = 'white';
  //     pageCtx.fillRect(0, 0, w, h);
  //     pageCtx.drawImage(canvas, 0, page * pxPageHeight, w, h, 0, 0, w, h);
  //     // Add the page to the PDF.
  //     if (page > 0) pdf.addPage();
  //     var imgData = pageCanvas.toDataURL('image/' + image.type, image.quality);
  //     pdf.addImage(
  //       imgData,
  //       image.type,
  //       margin[1],
  //       margin[0],
  //       innerPageWidth,
  //       pageHeight
  //     );
  //   }
  //   pdf.save('qualify-of-life.pdf');
  // });

  $('[id^=flush-collapse-]').attr('class', 'accordion-collapse collapse show');
  $('html').attr('style', 'overflow: hidden;');
  $('.preloader').show();
  var pdf = new jsPDF('p', 'pt', 'a4');
  var pdfName = 'quality-of-life.pdf';
  var options = {};
  //jQuery object of all the myDivClass divs
  var $divs = $('.pdf-wrapper');
  //the number of times we need to call addHtml (once per div)
  var numRecursionsNeeded = $divs.length - 1;
  var currentRecursion = 0;
  //Found a trick for using addHtml more than once per pdf. Call addHtml in the callback function of addHtml recursively.
  function recursiveAddHtmlAndSave(currentRecursion, totalRecursions) {
    //Once we have done all the divs save the pdf
    if (currentRecursion == totalRecursions) {
      pdf.save(pdfName);
      $('.preloader').hide();
      $('html').attr('style', '');
    } else {
      currentRecursion++;
      pdf.addPage();
      //$('.myDivClass')[currentRecursion] selects one of the divs out of the jquery collection as a html element
      //addHtml requires an html element. Not a string like fromHtml.
      pdf.addHTML(
        $('.pdf-wrapper')[currentRecursion],
        0,
        0,
        options,
        function () {
          console.log(currentRecursion);
          recursiveAddHtmlAndSave(currentRecursion, totalRecursions);
        }
      );
    }
  }
  pdf.addHTML($('.pdf-wrapper')[currentRecursion], 0, 0, options, function () {
    recursiveAddHtmlAndSave(currentRecursion, numRecursionsNeeded);
  });
}

function getDetailsTour() {
  const tour = new Shepherd.Tour({
    useModalOverlay: true,
    defaultStepOptions: {
      classes: 'shephered-theme-arrows',
      cancelIcon: {
        enabled: true,
      },
    },
  });
  tour.addStep({
    id: 'get-detail-tour-01',
    title: 'Inputs Guide',
    text: '1. Enter a country of origin here. An autocomplete will appear where you can select a country.',
    arrow: false,
    attachTo: {
      element: '.get-detail-tour-01',
      on: 'right',
    },
    buttons: [
      {
        text: 'Next <i class="fas fa-arrow-right"></i>',
        action: tour.next,
      },
    ],
  });
  tour.addStep({
    id: 'get-detail-tour-02',
    title: 'Inputs Guide',
    text: '2. Enter a destination country here. An autocomplete will appear where you can select a country.',
    arrow: false,
    attachTo: {
      element: '.get-detail-tour-02',
      on: 'right',
    },
    buttons: [
      {
        secondary: true,
        text: '<i class="fas fa-arrow-left"></i> Back',
        action: tour.back,
      },
      {
        text: 'Next <i class="fas fa-arrow-right"></i>',
        action: tour.next,
      },
    ],
  });
  tour.addStep({
    id: 'get-detail-tour-03',
    title: 'Inputs Guide',
    text: '3. Click to generate detailed info comparing two countries.',
    arrow: false,
    attachTo: {
      element: '.get-detail-tour-03',
      on: 'right',
    },
    buttons: [
      {
        secondary: true,
        text: '<i class="fas fa-arrow-left"></i> Back',
        action: tour.back,
      },
      {
        text: 'Next <i class="fas fa-arrow-right"></i>',
        action: tour.next,
      },
    ],
  });
  tour.addStep({
    id: 'get-detail-tour-04',
    title: 'Inputs Guide',
    text: '4. Get details result will appear here.',
    arrow: false,
    attachTo: {
      element: '.get-detail-tour-04',
      on: 'top',
    },
    buttons: [
      {
        secondary: true,
        text: '<i class="fas fa-arrow-left"></i> Back',
        action: tour.back,
      },
      {
        text: 'Done <i class="fas fa-check"></i>',
        action: tour.next,
      },
    ],
  });
  tour.start();
}

$(document).ready(function () {});
