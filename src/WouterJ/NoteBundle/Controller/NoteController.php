<?php

namespace WouterJ\NoteBundle\Controller;

use WouterJ\NoteBundle\Entity\Note;
use WouterJ\NoteBundle\Form\Type\NoteType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use FOS\RestBundle\Controller\Annotations as Rest;
use FOS\RestBundle\View\View;

class NoteController extends Controller
{
    /**
     * @Route("/notes", name="wouterj_note_all")
     * @Method("GET")
     * @Rest\View(templateVar="notes")
     */
    public function getAllAction()
    {
        return $this->getDoctrine()->getRepository('WouterJNoteBundle:Note')->findAll();
    }

    /**
     * @Route("/note/{id}", name="wouterj_note_one")
     * @Method("GET")
     * @Rest\View(templateVar="note")
     */
    public function getOneAction(Note $note)
    {
        return $note;
    }

    /**
     * @Route("/notes")
     * @Method("POST")
     */
    public function createAction(Request $request)
    {
        $note = new Note();
        $em = $this->getDoctrine()->getManager();

        $form = $this->createForm(new NoteType(), $note);

        $form->handleRequest($request);

        if ($form->isValid()) {
            $em->persist($note);
            $em->flush();

            $response = new Response();
            $response->setStatusCode(201);
            $response->headers->set('Location',
                $this->generateUrl(
                    'wouterj_note_one', array('id' => $note->id),
                    true // absolute
                )
            );

            return $response;
        }

        return View::create($form, 400);
    }

    /**
     * @Route("/note/{id}")
     * @Method("DELETE")
     */
    public function deleteAction(Note $note)
    {
        $em = $this->getDoctrine()->getManager();
        $em->remove($note);
        $em->flush();
    }
}
