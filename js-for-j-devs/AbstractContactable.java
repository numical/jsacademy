/*
 * Copyright (c) Incremental Ltd. 2004 - 2009
 */
package com.eu.incremental.common.base.model;

import java.util.SortedSet;
import java.util.TreeSet;

import com.eu.incremental.common.model.AbstractCategorisedEntity;


/**
 * Generic parent for all entities that can be contacted.
 */
public abstract class AbstractContactable <T extends AbstractContactable<?,N,D,A>,
       N extends AbstractNote<?>, 
       D extends AbstractDocument<?>, 
       A extends AbstractAddress<?>> 
         extends AbstractCategorisedEntity<T>
         implements INoteContainer<N>, IDocumentContainer<D> {

         private static final long serialVersionUID = -5391909307359740875L;

         private String _code = null;
         private String _significantName = null;
         private SortedSet<D> _documents = null;
         private SortedSet<N> _notes = null;
         private SortedSet<AbstractChannel<?>> _channels = null;
         private SortedSet<A> _addresses = null;

         /**
          * Protected constructor for subclasses.
          * @param significantName
          * @param userid
          */
         protected AbstractContactable( String significantName, String userid ) {
           super( userid );
           if ( significantName == null) throw new IllegalArgumentException();
           setSignificantName( significantName );
           _documents = new TreeSet<D>();
           _notes = new TreeSet<N>();
           _channels = new TreeSet<AbstractChannel<?>>();
           _addresses = new TreeSet<A>();
         }

         /**
          * For hibernate only.
          */
         protected AbstractContactable() {
           super();
           // hibernate sets all values via field access
         }

         /**
          * Can be <code>null</code> - used only in some subclasses.
          * @hibernate.property column="code" 
          *                     type="string" 
          *                     not-null="false" 
          *                     unique="false"
          * @return Returns the code
          */
         public String getCode() {
           return _code;
         }

         /**
          * The surname 
          * @hibernate.property column="name" 
          * 					   type="string" 
          * 					   not-null="true" 
          * 					   unique="false"
          * @return Returns the significantName.
          */
         public String getSignificantName() {
           return _significantName;
         }   

         /**
          * Overridden in subclasses where their specific hibernate settings can 
          * be defined.
          * @return
          */
         public SortedSet<D> getDocuments() {
           assert _documents != null;
           return _documents;
         }

         /**
          * Overridden in subclasses where their specific hibernate settings can 
          * be defined.
          * @return
          */
         public SortedSet<N> getNotes() {
           assert _notes != null;
           return _notes;
         }

         /**
          * Overidden in subclasses where their specific hibernate settings can 
          * be defined.
          * @return
          */
         public SortedSet<AbstractChannel<?>> getChannels() {
           assert _channels != null;
           return _channels;
         }

         /**
          * Overidden in subclasses where their specific hibernate settings can 
          * be defined.
          * @return
          */
         public SortedSet<A> getAddresses() {
           assert _addresses != null;
           return _addresses;
         }

         /**
          * Convenience methods that returns the main phone number
          * of the contactactable.
          * <br>Currently this is defined as the first one entered.
          * @return the main <code>Phone</code> or <code>null</code>
          */
         public Phone getMainPhone() {
           AbstractChannel<?> channel= getMainChannel( Phone.class );
           if ( channel != null ) {
             assert channel instanceof Phone;
             return (Phone)channel;
           }
           return null;
         }

         /**
          * Convenience methods that returns the main e-mail
          * of the contactable.
          * <br>Currently this is defined as the first one entered.
          * @return the main <code>Email</code> or <code>null</code>
          */
         public Email getMainEmail() {
           AbstractChannel<?> channel = getMainChannel( Email.class );
           if ( channel != null ) {
             assert channel instanceof Email;
             return (Email)channel;
           }
           return null;
         }

         /**
          * Always an empty array
          * @see com.eu.incremental.common.base.model.IDocumentContainer#getChildContainers()
          */
         public IDocumentContainer<?>[] getChildContainers() {
           return EMPTY_DOC_CONTAINER_ARRAY;
         }


         /* setters */

         /**
          * @param code The code to set - can be <code>null</code>
          */
         public void setCode(String code) {
           _code = code;
         }

         /**
          * The significantName
          * @param significantName
          */
         public void setSignificantName( String name ) {
           if (name == null) throw new IllegalArgumentException();
           _significantName = name;
         }

         /**
          * Convenience method for adding individual documents.
          * @param item
          */
         public boolean addDocument( D document ) {
           assert _documents != null;
           if ( document == null) {
             throw new IllegalArgumentException();
           }
           return _documents.add( document );
         }

         /**
          * Convenience method for removing individual documents.
          * @param item
          */
         public boolean removeDocument( D document ) {
           assert _documents != null;
           if ( document == null) {
             throw new IllegalArgumentException();
           }
           return _documents.remove( document );
         }

         /**
          * Convenience method for adding individual channels.
          * @param item
          */
         public boolean addChannel( AbstractChannel<?> channel ) {
           assert _channels != null;
           if (channel == null) {
             throw new IllegalArgumentException();
           }
           return _channels.add( channel );
         }

         /**
          * Convenience method for removing individual channels.
          * @param item
          */
         public boolean removeChannel( AbstractChannel<?> channel ) {
           assert _channels != null;
           if (channel == null) {
             throw new IllegalArgumentException();
           }
           return _channels.remove( channel );
         }

         /**
          * Convenience method for adding individual addresses.
          * @param address
          */
         public boolean addAddress( A address ) {
           assert _addresses != null;
           if (address == null) {
             throw new IllegalArgumentException();
           }
           return _addresses.add( address );
         }

         /**
          * Convenience method for removing individual addresses.
          * @param address
          */
         public boolean removeAddress( A address ) {
           assert _addresses != null;
           if (address == null) {
             throw new IllegalArgumentException();
           }
           return _addresses.remove( address );
         }

         /**
          * Convenience method for adding an individual note.
          * @param item
          */
         public boolean addNote( N note ) {
           assert _notes != null;
           if ( note == null) throw new IllegalArgumentException();
           return _notes.add( note );
         }

         /**
          * This creates an address appropriate for the contactable, but does 
          * <code>not</code> add it - call <code>addAddress</code> for this.
          * @return
          */
         public abstract A createAddress();

         /**
          * Copy all collections from this to the passed instance, handling 
          * changes in instances.  Note that:
          * <ul>
          * <li> copies of objects are made (i.e. deep clone)
          * <li> existing elements in the copyTo's collections are <b>not</b> removed
          * <ul>
          * @param copyTo
          */
         public <T1 extends AbstractContactable<?,N1,D1,A1>,
                N1 extends AbstractNote<?>, 
                D1 extends AbstractDocument<?>, 
                A1 extends AbstractAddress<?>> void copyCollections( 
                    AbstractContactable<T1,N1,D1,A1> copyTo ) {
                  if ( copyTo == null) throw new IllegalArgumentException();

                  // documents
                  for ( D doc : getDocuments() ) {
                    D1 copy = copyTo.createDocument( 
                        doc.getFile(), 
                        doc.getLastUpdatedBy(), 
                        doc.getDescription(), 
                        doc.getActivity() );
                    copy.setTitle( doc.getTitle() );
                    copy.setDateRecorded( doc.getDateRecorded() );
                    copyTo.addDocument( copy );
                  }

                  // notes
                  for ( N note : getNotes() ) {
                    N1 copy = copyTo.createNote(
                        note.getAuthor(), note.getDateRecorded(), note.getText() );
                    copyTo.addNote( copy );
                  }

                  // channels
                  for ( AbstractChannel<?> channel : getChannels() ) {
                    copyTo.addChannel( channel.clone() );
                  }

                  // addresses
                  for ( A address : getAddresses() ) {
                    A1 copy = copyTo.createAddress();
                    for ( int i=0 ; i <= AbstractAddress.COUNTRY ; i++ ) {
                      copy.setValue( i, address.getValue( i ) );
                    }
                    copyTo.addAddress( copy );
                  }

                    }


         /* hibernate only setters */

         /**
          * @param addresses The addresses to set.
          */
         void setAddresses(SortedSet<A> addresses) {
           this._addresses = addresses;
         }

         /**
          * @param channels The channels to set.
          */
         void setChannels(SortedSet<AbstractChannel<?>> channels) {
           this._channels = channels;
         }

         /**
          * @param documents The documents to set.
          */
         void setDocuments(SortedSet<D> documents) {
           this._documents = documents;
         }

         /**
          * @param notes The notes to set.
          */
         void setNotes(SortedSet<N> notes) {
           this._notes = notes;
         }

         /* private methods */

         private <T1 extends AbstractChannel<?>> AbstractChannel<?> getMainChannel( Class<T1> clazz ) {
           assert clazz != null;
           for ( AbstractChannel<?> channel : getChannels() ) {
             if ( clazz.equals( channel.getClass() ) ) {
               return channel;
             }
           }
           return null;
         }

}
