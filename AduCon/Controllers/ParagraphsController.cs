﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AduCon.Data;
using AduCon.Model;

namespace AduCon.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ParagraphsController : ControllerBase
    {
        private readonly AdconContext _context;

        public ParagraphsController(AdconContext context)
        {
            _context = context;
        }

        // GET: api/Paragraphs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Paragraph>>> GetParagraphs()
        {
            return await _context.Paragraphs.ToListAsync();
        }

        // GET: api/Paragraphs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Paragraph>> GetParagraph(int id)
        {
            var paragraph = await _context.Paragraphs.FindAsync(id);

            if (paragraph == null)
            {
                return NotFound();
            }

            return paragraph;
        }

        // PUT: api/Paragraphs/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutParagraph(int id, Paragraph paragraph)
        {
            if (id != paragraph.Id)
            {
                return BadRequest();
            }

            _context.Entry(paragraph).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ParagraphExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Paragraphs
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Paragraph>> PostParagraph(Paragraph paragraph)
        {
            _context.Paragraphs.Add(paragraph);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetParagraph", new { id = paragraph.Id }, paragraph);
        }

        // DELETE: api/Paragraphs/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Paragraph>> DeleteParagraph(int id)
        {
            var paragraph = await _context.Paragraphs.FindAsync(id);
            if (paragraph == null)
            {
                return NotFound();
            }

            _context.Paragraphs.Remove(paragraph);
            await _context.SaveChangesAsync();

            return paragraph;
        }

        private bool ParagraphExists(int id)
        {
            return _context.Paragraphs.Any(e => e.Id == id);
        }
    }
}
