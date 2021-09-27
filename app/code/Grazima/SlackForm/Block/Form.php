<?php
namespace Grazima\SlackForm\Block;

class Form extends \Magento\Framework\View\Element\Template
{
    protected $directoryBlock;
    /**
     * @param \Magento\Framework\View\Element\Template\Context $context
     * @param array $data
     */
    public function __construct(
        \Magento\Framework\View\Element\Template\Context $context,
        \Magento\Directory\Block\Data $directoryBlock, 
        array $data = []
    ) {
        $this->directoryBlock = $directoryBlock;
        parent::__construct($context, $data);
    }

    public function getCountries() 
    {
        $country = $this->directoryBlock->getCountryHtmlSelect();
        return $country;
    }
}
