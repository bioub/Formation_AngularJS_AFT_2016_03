<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

/**
 * @Route("/gantt")
 */
class GanttController extends Controller
{
    /**
     * @Route("/")
     */
    public function indexAction()
    {
        return $this->render('AppBundle:Gantt:index.html.twig', array(
            // ...
        ));
    }

    /**
     * @Route("/data")
     */
    public function dataAction()
    {
        return $this->render('AppBundle:Gantt:data.html.twig', array(
            // ...
        ));
    }

}
