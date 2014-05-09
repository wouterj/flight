<?php

namespace WouterJ\NoteBundle\Entity;

use Doctrine\ORM\Mapping as Orm;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity
 * @ORM\Table(name="notes")
 */
class Note
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    public $id;
    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank
     */
    public $title;
    /**
     * @ORM\Column(type="text")
     * @Assert\NotBlank
     */
    public $content;
}
