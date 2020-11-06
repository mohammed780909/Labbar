const faq_item_title = $(".faq_item_title");
const faq_item_content = $(".faq_item_content");


faq_item_title.click(function(){
    const this_faq_item_title = $(this);
    const this_faq_item_content = $(this).parent().find(faq_item_content);
    
    this_faq_item_content.slideToggle();
    faq_item_content.not(this_faq_item_content).slideUp();
    

}
);